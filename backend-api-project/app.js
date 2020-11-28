const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const path = require("path");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const meetingRouter = require("./routes/meetingRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

// Serving Static File
app.use(express.static(path.join(__dirname, "public")));

// 1) MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  // Development Logging
  app.use(morgan("dev"));
}

// Global Middleware
app.use(express.static("public"));
// Set Security HTTP Header
app.use(helmet());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP. Please try again in an hour!",
});
// Limit Request from Same API
app.use("/api", limiter);

// Body Parse - Reading Data from Body into req.body
app.use(
  express.json({
    limit: "10kb",
  })
);
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Data Sanitization against NOSQL query injction
app.use(mongoSanitize());
// Data Sanitization against XSS
app.use(xss());

// Prepare Paramter Polution
app.use(
  hpp({
    whitelist: [],
  })
);

app.use(compression());

// Test Middlware
app.use((req, res, next) => {
  // console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
// Meetings
app.use("/meetings", meetingRouter);
app.use("/meeting", meetingRouter);

// Users
app.use("/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

module.exports = app;

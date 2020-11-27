import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

// Components
import Table from "./components/Table/Table";
import EditProduct from "./components/Form/EditProduct";

// Actions
import { loadData } from "./actions/AppActions";

// redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  useEffect(() => {
    store.dispatch(loadData());
    //eslint-disable-next-line
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Table} />
            <Route exact path="/edit-product" component={EditProduct} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

// const mapStateToProps = (state) => ({});

export default App;

// export default App;

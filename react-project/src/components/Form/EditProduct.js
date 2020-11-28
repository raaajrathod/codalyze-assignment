import React, { useEffect, useState, Fragment } from "react";

import { connect } from "react-redux";

import { Link, withRouter } from "react-router-dom";

import { setProductData } from "../../actions/AppActions";

const EditProduct = ({ products, history, pricingInfo, setProductData }) => {
  let queryString = history.location.search.replace("?", "");
  const id = getQueryParams(queryString).id;
  let options = "";
  let isDisabled = false;
  let product = undefined;
  const { budget = [], premier = [] } = pricingInfo;

  useEffect(() => {
    product = products[id];
    if (product) {
      setFormData({
        name: product.name,
        pricingTier: product.pricingTier,
        priceRange: product.priceRange,
        weight: product.weight,
        availability: product.availability,
        productUrl: product.productUrl,
        isEditable: product.isEditable,
      });
    }

    if (pricingTier === "budget") {
      options = budget.map((val) => <option value={val}>{val}</option>);
    } else if (pricingTier === "premier") {
      options = premier.map((val) => <option value={val}>{val}</option>);
    }
  }, [id, products, pricingInfo]);

  const [formData, setFormData] = useState({
    name: "",
    pricingTier: "",
    priceRange: "",
    weight: "",
    availability: "",
    productUrl: "",
    isEditable: "",
  });

  if (product && !product.isEditable) {
    isDisabled = true;
  }

  const onChange = (e) => {
    if (e.target.name === "isEditable") {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    if (name && pricingTier && priceRange && weight && productUrl) {
      isDisabled = false;
    } else {
      isDisabled = true;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setProductData({ id: id, ...formData }, history);
  };

  let {
    name,
    priceRange,
    pricingTier,
    availability,
    weight,
    productUrl,
    isEditable,
  } = formData;

  return (
    <Fragment>
      <Link to={`/`}>
        <h6 className="text-primary pt-4 lead">
          {" "}
          <i className="ion-arrow-left-c"></i> Go Back
        </h6>
      </Link>
      <h4 className="large text-dark pt-2 display-4">Edit Product</h4>
      <div></div>
      <form className="form pt-2" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group row">
          <label htmlFor="name" class="col-sm-1 col-form-label">
            Name *
          </label>
          <div class="col-sm-11">
            <input
              required
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="availability" class="col-sm-1 col-form-label">
            Availability
          </label>
          <div class="col-sm-5">
            <input
              id="availability"
              type="text"
              placeholder="availability"
              name="availability"
              value={availability}
              onChange={(e) => onChange(e)}
              className="form-control"
            />
          </div>
          <label htmlFor="weight" class="col-sm-2 col-form-label">
            Weight (in gms)*
          </label>
          <div class="col-sm-4">
            <input
              required
              id="weight"
              type="text"
              placeholder="weight"
              name="weight"
              value={weight}
              onChange={(e) => onChange(e)}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="productUrl" class="col-sm-1 col-form-label">
            URL * 
          </label>
          <div class="col-sm-11">
            <input
              required
              id="productUrl"
              type="text"
              placeholder="productUrl"
              name="productUrl"
              value={productUrl}
              onChange={(e) => onChange(e)}
              className="form-control"
            />
          </div>
        </div>
        <div class="row">
          <legend class="col-form-label col-sm-2">Select Price Tier</legend>
          <div class="col-sm-10">
            <div className="form-check form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  value="budget"
                  name="pricingTier"
                  checked={pricingTier === "budget"}
                  onChange={(e) => onChange(e)}
                  class="form-check-input"
                />
                Budget
              </label>
            </div>

            <div className="form-check form-check-inline">
              <label class="form-check-label">
                <input
                  type="radio"
                  value="premier"
                  name="pricingTier"
                  checked={pricingTier === "premier"}
                  onChange={(e) => onChange(e)}
                  class="form-check-input"
                />
                Premier
              </label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="productUrl" class="col-sm-2 col-form-label">
            Select Price Range{" "}
          </label>
          <div class="col-sm-2">
            <select
              required
              id="priceRange"
              name="priceRange"
              value={priceRange}
              onChange={(e) => onChange(e)}
              className="form-control custom-select"
            >
              {pricingTier === "budget"
                ? budget.map((val, index) => (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  ))
                : premier.map((val, index) => (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div class="form-check">
            <input
              id="isEditable"
              name="isEditable"
              type="checkbox"
              checked={isEditable}
              onChange={(e) => onChange(e)}
              class="form-check-input"
            />
            <label class="form-check-label" htmlFor="isEditable">
              Is Editable ?{" "}
            </label>
          </div>
        </div>
        <input disabled={isDisabled} type="submit" class="btn btn-primary" />
      </form>
    </Fragment>
  );
};

const getQueryParams = (query) => {
  let obj = {};

  let params = query.split("&");
  params = params.map((val) => val.split("="));

  params = params.map((param) => (obj[param[0]] = param[1]));
  return obj;
};

const mapStateToProps = (state) => ({
  products: state.AppReducer.products,
  pricingInfo: state.AppReducer.pricingInfo,
});

export default connect(mapStateToProps, { setProductData })(
  withRouter(EditProduct)
);
// history.push("/dashboard");

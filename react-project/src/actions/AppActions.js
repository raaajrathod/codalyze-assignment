import {
  LOAD_DATA,
  LOAD_EDITABLE_PRODUCT,
  SAVE_EDITABLE_PRODUCT,
} from "./Types";
import { products, pricingInfo } from "../json/staticData";

// Load static Data into Store
export const loadData = () => async (dispatch) => {
  if (products && pricingInfo) {
    dispatch({
      type: LOAD_DATA,
      payload: { products, pricingInfo },
    });
  }
};

// Load Product into Store to Edit
export const loadProductToEdit = (product) => async (dispatch) => {
  if (products) {
    dispatch({
      type: LOAD_EDITABLE_PRODUCT,
      payload: { product },
    });
  }
};

// Store Updated Product Data into Store
export const setProductData = (formData, history) => async (dispatch) => {
  dispatch({
    type: SAVE_EDITABLE_PRODUCT,
    payload: { formData },
  });

  // Redirect After Storing
  history.push("/");
};

import {
  LOAD_DATA,
  LOAD_EDITABLE_PRODUCT,
  SAVE_EDITABLE_PRODUCT,
} from "./Types";
import { products, pricingInfo } from "../json/staticData";

export const loadData = () => async (dispatch) => {
  if (products && pricingInfo) {
    dispatch({
      type: LOAD_DATA,
      payload: { products, pricingInfo },
    });
  }
};

export const loadProductToEdit = (product) => async (dispatch) => {
  if (products) {
    dispatch({
      type: LOAD_EDITABLE_PRODUCT,
      payload: { product },
    });
  }
};

export const setProductData = (formData, history) => async (dispatch) => {
  dispatch({
    type: SAVE_EDITABLE_PRODUCT,
    payload: { formData },
  });

  history.push("/");
};

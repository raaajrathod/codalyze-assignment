import {
  LOAD_DATA,
  LOAD_EDITABLE_PRODUCT,
  SAVE_EDITABLE_PRODUCT,
} from "../actions/Types";

const initialState = {
  products: [],
  pricingInfo: {},
  editableProduct: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_DATA:
      return {
        ...state,
        products: payload.products,
        pricingInfo: payload.pricingInfo,
      };
    case LOAD_EDITABLE_PRODUCT:
      return {
        ...state,
        editableProduct: { ...payload.product },
      };
    case SAVE_EDITABLE_PRODUCT:
      state.products[payload.formData.id] = { ...payload.formData };
      return {
        ...state,
      };

    default:
      return state;
  }
};

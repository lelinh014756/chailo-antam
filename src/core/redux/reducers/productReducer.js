import {
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_REQUESTING,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAILED,
  EDIT_PRODUCT_REQUESTING,
  EDIT_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_REQUESTING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAIL_FAILED,
  GET_PRODUCT_DETAIL_REQUESTING,
  GET_PRODUCT_DETAIL_SUCCESS,
} from "../constants/productConstants";

const initialState = {
  loading: false,
  error: "",
  productList: [],
  isLoadingDetail: false,
  editProduct: {},
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUESTING: {
      state.loading = true;
      return { ...state };
    }

    case GET_PRODUCTS_SUCCESS: {
      state.loading = false;
      state.productList = action.payload;
      return { ...state };
    }

    case GET_PRODUCTS_FAILED: {
      state.loading = false;
      state.productList = [];
      return { ...state };
    }

    case ADD_PRODUCT_REQUESTING: {
      state.loading = true;

      return { ...state };
    }

    case ADD_PRODUCT_SUCCESS: {
      state.loading = false;
      return { ...state };
    }

    case ADD_PRODUCT_FAILED: {
      state.loading = false;
      state.error = action.payload;

      return { ...state };
    }

    case DELETE_PRODUCT_SUCCESS: {
      let result = [...state.productList];
      const index = result.findIndex((y) => y.id === action.payload);

      if (index !== -1) {
        result.splice(index, 1);
      }

      state.productList = result;

      return { ...state };
    }

    case GET_PRODUCT_DETAIL_REQUESTING: {
      state.isLoadingDetail = true;
      return { ...state };
    }

    case GET_PRODUCT_DETAIL_SUCCESS: {
      state.isLoadingDetail = false;
      state.editProduct = action.payload;
      return { ...state };
    }

    case GET_PRODUCT_DETAIL_FAILED: {
      state.isLoadingDetail = false;
      state.editProduct = {};
      return { ...state };
    }

    case EDIT_PRODUCT_REQUESTING: {
      state.loading = true;
      return { ...state };
    }

    case EDIT_PRODUCT_SUCCESS: {
      state.loading = false;
      let result = [...state.productList];
      const index = result.findIndex((y) => y.id === action.payload.id);

      if (index !== -1) {
        result[index] = {
          ...result[index],
          ...action.payload.dataUpdate,
        };
      }

      state.productList = result;
      return { ...state };
    }

    case EDIT_PRODUCT_FAILED: {
      state.loading = false;
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

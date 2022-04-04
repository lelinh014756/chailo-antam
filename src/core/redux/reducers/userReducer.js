import { KEY_TOKEN } from "../../../app/const/App";
import {
  ADD_ORDER_SUCCESS,
  DELETE_ORDER,
  DELETE_ORDER_SUCCESS,
  GET_ORDERS_FAILED,
  GET_ORDERS_REQUESTING,
  GET_ORDERS_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../constants/userConstants";

const initialState = {
  logging: false,
  isLogined: false,
  currentUser: null,
  isValid: false,
  orderList: [],
  loadingOrder: false,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTING: {
      state.logging = true;

      return { ...state };
    }

    case LOGIN_SUCCESS: {
      state.logging = false;
      state.isLogined = true;
      state.currentUser = action.payload;

      localStorage.setItem(KEY_TOKEN, "fake_login");

      return { ...state };
    }

    case LOGIN_FAILED: {
      state.logging = false;

      return { ...state };
    }

    case LOGOUT: {
      state.logging = false;
      state.isLogined = false;
      state.currentUser = null;

      localStorage.removeItem(KEY_TOKEN);
      return { ...state };
    }

    case ADD_ORDER_SUCCESS: {
      state.isValid = true;
      return { ...state };
    }

    case GET_ORDERS_REQUESTING: {
      state.loadingOrder = true;
      return { ...state };
    }

    case GET_ORDERS_SUCCESS: {
      state.loadingOrder = false;
      state.orderList = action.payload;
      return { ...state };
    }

    case GET_ORDERS_FAILED: {
      state.loadingOrder = false;
      state.orderList = [];

      return { ...state };
    }

    case DELETE_ORDER_SUCCESS: {
      let result = [...state.orderList];
      const index = result.findIndex((y) => y.id === action.payload);

      if (index !== -1) {
        result.splice(index, 1);
      }

      state.orderList = result;

      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

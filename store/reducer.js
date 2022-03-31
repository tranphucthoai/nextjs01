import { combineReducers } from "redux";
import {
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_FAILURE,
  GET_ALL_CATEGORIES_SUCCESS,
} from "./../constans/";

const initState = {
  isLoading: true,
  isError: false,
  data: [],
  errorMessage: "",
};

const CategoriesReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_ALL_CATEGORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  CategoriesReducer: CategoriesReducer,
});

export default rootReducer;

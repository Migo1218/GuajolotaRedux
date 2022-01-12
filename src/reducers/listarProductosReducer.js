import { types } from "../types/types";

const initialState = {
  productos: [],
  search:""
};

export const listarProductosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.listar:
      return {
        productos: action.payload,
      };

    case types.search:
      return {
        productos: action.payload,
      };

    default:
      return state;
  }
};

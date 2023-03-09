import { createSlice } from "@reduxjs/toolkit";

import { addProduct, getallProducts } from "../../services/api";

export const productsslice = createSlice({
  name: "products",
  initialState: {
    listproducts: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.listproducts = action.payload;
    },

    createProd: (state, action) => {
      addProduct(action.payload);
      state.listproducts = [...state.listproducts, action.payload];
    },

    updateProd: (state, action) => {
      //console.log(action.payload)
      const index = state.listproducts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.listproducts[index] = action.payload;
      }
    },
    deleteProd: (state, action) => {
      console.log("i want to delete product with id " + action.payload);
      const index = state.listproducts.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.listproducts.splice(index, 1);
      }
    },
    selectProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    unselectProduct(state) {
      state.selectedProduct = null;
    },
  },
});

export const fetchProducts = () => async (dispatch) => {
  getallProducts().then((response) => {
    dispatch(setProducts(response.data));
  });
};

export const { createProd, updateProd, deleteProd, setProducts } =productsslice.actions;
export default productsslice.reducer;

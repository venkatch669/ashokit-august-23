import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
  'addtocart/fetchProducts',
  async () => {
    const response = await fetch('https://dummyjson.com/products').then((res)=> res.json());
    console.log(response);
    return response;
  }
)

export interface IAddToCart {
  productCount: number,
  products:Object
}

const initialState: IAddToCart = {
    productCount: 0,
    products:{}
}

export const addtocartSlice = createSlice({
  name: 'addtocart',
  initialState,
  reducers: {
    increaseAddToCartCount: (state) => {
        state.productCount = state.productCount + 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        // Handle pending state if needed
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // Handle fulfilled state and update the state with the fetched data
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        // Handle rejected state if needed
      });
  },
  
})


// Action creators are generated for each case reducer function
export const { increaseAddToCartCount } = addtocartSlice.actions

export default addtocartSlice.reducer
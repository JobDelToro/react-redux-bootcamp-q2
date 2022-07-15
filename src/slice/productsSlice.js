import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import wizestoreApi from '../utils/wizestoreApi';

const initialState = {
    products: [],
    isLoading: false,
    error: null
};

/** 
 * Fetching products data.
 *
 * @param  {}
 *
 * @return {Array}
 *         An array of products
*/
export const fetchProducts = createAsyncThunk('product/fetchProducts', async (_,{ rejectWithValue }) => {
    try {
        const res = await wizestoreApi.get('/products?maxItems=70');
        return res.data.items;
    } catch (error) {
        return rejectWithValue(error);
    }
});

const productsSlice = createSlice({
    name: 'product',
    initialState: initialState,
    extraReducers: builder => {
        builder
            // Fetch products
            .addCase(fetchProducts.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const selectProducts = state => state.product.products;

export default productsSlice.reducer;

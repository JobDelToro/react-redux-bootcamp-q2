import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import wizestoreApi from '../utils/wizestoreApi';

const initialState = {
    orders: [],
    isLoading: false,
    order: null,
    error: null
};

/** 
 * Add a product into the orders array.
 *
 * @param  {Object}
 *          Product object
 *
 * @return {VoidFunction}
 * 
*/
const addOrderAction = (state, action) => {
    let product = action.payload;
    product = { ...product, quantity: 1 };

    state.orders = state.orders.filter(orderProduct => {
        if (orderProduct.id === product.id) {
            product = { ...orderProduct, quantity: (orderProduct.quantity + 1) };
        }
        return orderProduct.id !== product.id
    });
    state.orders = [ ...state.orders, product ];
};
/** 
 * Create an order with a POST request.
 *
 * @param  {}
 *          
 *
 * @return {VoidFunction}
 *          Array of products that belongs to order
*/
export const createOrder = createAsyncThunk('order/createOrder', async (_, { rejectWithValue, getState }) => {
    try {
        console.log("CREATE ORDER")
        const res = await wizestoreApi.post('/orders', {});
        return res.data;
    } catch (error) {
        return rejectWithValue(error);
    };
});
/** 
 * Update a product quantity.
 *
 * @param  {Object}
 *          Product object
 *
 * @return {VoidFunction}
 * 
*/
const updateOrderAction = (state, action) => {

    let { product, quantity } = action.payload;
    state.orders = state.orders.map(orderProduct => {
        if (orderProduct.id === product.id) {
            orderProduct = { ...orderProduct, quantity: quantity };
        }
        return orderProduct
    });
};
/** 
 * Remove a product from the order.
 *
 * @param  {Object}
 *          Product object
 *
 * @return {VoidFunction}
 * 
*/
const removeOrderAction = (state, action) => {

    let product = action.payload;
    state.orders = state.orders.filter(orderProduct => orderProduct.id !== product.id);
};

const ordersSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {
        addOrder: addOrderAction,
        updateOrder: updateOrderAction,
        removeOrder: removeOrderAction
    },
    extraReducers: builder => {
        builder
            .addCase(createOrder.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.order = action.payload;
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.error = action.payload;
            })
    }
});

export const { addOrder, updateOrder, removeOrder } = ordersSlice.actions;

export const selectOrders = state => state.order.orders;
export const selectOrderCreated = state => state.order.order;

export default ordersSlice.reducer;

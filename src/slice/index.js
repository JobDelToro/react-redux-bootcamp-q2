import authActions from './authSlice';
import productsActions from './productsSlice';
import ordersActions from './ordersSlice';

export const rootSlice = {
    useAuth: authActions.useAuth,
    login: authActions.login,
    fetchProducts: productsActions.fetchProducts,
    getOrders: ordersActions.getOrders,
    addOrder: ordersActions.addOrder
};

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import authSlice from './authSlice';
import productsSlice from './productsSlice';
import ordersSlice from './ordersSlice';

const combinedReducers = combineReducers({
    auth: authSlice,
    product: productsSlice,
    order: ordersSlice
});

const rootReducer = (state, action) => {
    if (action.type === 'auth/logout') {
        state = undefined
    }
    return combinedReducers(state, action);
};

/**
 * 
 * Redux persist configuration
 * 
 */
const persistConfig = {
    key: 'root',
    storage,
    transforms: [
        encryptTransform({
            secretKey: 'my-super-secret-key',
            onError: (err) => {
                // Handle the error
                console.log(err);
            }
        })
    ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const persistedStore = () => {
    const store = configureStore({
        reducer: persistedReducer,
        middleware: [thunk]
    });
    const persistor = persistStore(store);
    return { store, persistor };
};

export default persistedStore;

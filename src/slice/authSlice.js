import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import loginApi from "../utils/loginApi";

const initialState = {
    user: undefined,
    isAuthenticated: false,
    isLoading: false,
    isAuth0: false
};
/**
 * Login a user
 * 
 * @param {Object}
 * 
 * @return {VoidFunction}
 * 
 */
export const login = createAsyncThunk('auth/login', async (payload, { rejectWithValue }) => {
    try {
        const user = await loginApi(payload.email, payload.password);
        return user;
    } catch (error) {
        return rejectWithValue(error);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logout: state => {}
    },
    extraReducers: builder => {
        builder
            // Login
            .addCase(login.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { logout } = authSlice.actions;

export const selectAuth = state => state.auth;

export default authSlice.reducer;

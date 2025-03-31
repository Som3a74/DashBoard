import actAuthRegister from './act/actAuthRegister';
import actAuthLogin from './act/actAuthLogin';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    token: localStorage.getItem('token') || null,
    loading: "idle",
    error: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authLogout: (state) => {
            localStorage.removeItem('token');
            state.token = null;
        },
    },
    extraReducers(builder) {
        builder.addCase(actAuthRegister.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actAuthRegister.fulfilled, (state, action) => {
            state.loading = "succeeded";
            if (action.payload.token) {
                localStorage.setItem('token', action.payload.token);
                state.token = action.payload.token;
            }
        });
        builder.addCase(actAuthRegister.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.payload;
        });
        //Login
        builder.addCase(actAuthLogin.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actAuthLogin.fulfilled, (state, action) => {
            state.loading = "succeeded";
            if (action.payload.token) {
                localStorage.setItem('token', action.payload.token);
                state.token = action.payload.token;
            }
        });
        builder.addCase(actAuthLogin.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.payload;
        });
    },
})

export const { authLogout } = authSlice.actions

export default authSlice.reducer
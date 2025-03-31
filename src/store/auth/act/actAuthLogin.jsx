import axios from 'axios';
import axiosErrorHandler from './../../../util/axiosErrorHandler';
import { createAsyncThunk } from '@reduxjs/toolkit';


const actAuthLogin = createAsyncThunk("auth/actAuthLogin", async (formData, thunk) => {
    
    const { rejectWithValue } = thunk;
    try {
        const response = await axios.post('/api/user/login', formData)
        return response.data
    } catch (error) {
        console.log(error)
        return rejectWithValue(axiosErrorHandler(error));
    }
})

export default actAuthLogin;
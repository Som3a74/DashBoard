import axios from 'axios';
import axiosErrorHandler from './../../../util/axiosErrorHandler';
import { createAsyncThunk } from '@reduxjs/toolkit';

const actAuthRegister = createAsyncThunk("auth/actAuthRegister", async (formData, thunk) => {
    
    const { rejectWithValue } = thunk;
    try {
        const response = await axios.post("/api/user/register", formData);
        return response.data
    } catch (error) {
        console.log(error)
        return rejectWithValue(axiosErrorHandler(error));
    }
},)

export default actAuthRegister;
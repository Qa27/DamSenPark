import { createAsyncThunk } from '@reduxjs/toolkit';

export const OrderActions = createAsyncThunk(
  'form/addFormData',
  async (formData: any) => {
    // Do something with formData, such as saving it to Firestore
    return formData;
  },
);

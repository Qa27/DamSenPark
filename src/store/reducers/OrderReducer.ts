import { createSlice } from "@reduxjs/toolkit";
import { OrderActions } from "../actions/OrderActions";

interface FormState {
  formData: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState: FormState = {
  formData: {},
  status: "idle",
  error: undefined,
};

const OrderReducer = createSlice({
  name: "form",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(OrderActions.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(OrderActions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.formData = action.payload;
      })
      .addCase(OrderActions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message;
      });
  },
});

export default OrderReducer.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddCommentFormSchema } from "../type/addCommentForm";

const initialState: AddCommentFormSchema = {
    error: undefined,
    text: "",
};

export const addCommentFormSlice = createSlice({
    name: "AddCommentForm",
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(changeName.pending, (state, action) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(changeName.fulfilled, (state, action: PayloadAction<>) => {
    //             state.isLoading = false;
    //             state.data = action.payload;
    //         })
    //         .addCase(changeName.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState:<FTName>Schema = {
    isLoading:undefined,
    error:undefined,
    data:undefined,
   
};

export const <FTName>Slice = createSlice({
    name: "[FTName]",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(changeName.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(changeName.fulfilled, (state, action:PayloadAction<>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(changeName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: <FTName>Actions } = <FTName>Slice;
export const { reducer: <FTName>Reducer } = <FTName>Slice;

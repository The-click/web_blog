import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ArticleEditPageSchema = {
    isLoading: undefined,
    error: undefined,
    data: undefined,
};

export const ArticleEditPageSlice = createSlice({
    name: "ArticleEditPage",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(changeName.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(changeName.fulfilled, (state, action: PayloadAction<>) => {
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
export const { actions: ArticleEditPageActions } = ArticleEditPageSlice;
export const { reducer: ArticleEditPageReducer } = ArticleEditPageSlice;

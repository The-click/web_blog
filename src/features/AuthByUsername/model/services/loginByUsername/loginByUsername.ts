import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig, ThunkExtraArg } from "app/providers/StoreProvider";
import axios from "axios";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

interface loginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    loginByUsernameProps,
    ThunkConfig<string>
>("login/loginByUsername", async (authData, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.post("/login", authData);

        if (!response.data) {
            throw new Error();
        }
        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data)
        );
        dispatch(userActions.setAuthData(response.data));

        extra.navigate("/about");

        return response.data;
    } catch (err) {
        console.log(err);
        return rejectWithValue("error");
    }
});

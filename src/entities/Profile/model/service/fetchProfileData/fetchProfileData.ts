import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "../../types/profile";

interface ProfileDataProps {}

export const fetchProfileData = createAsyncThunk<
    Profile,
    ProfileDataProps,
    ThunkConfig<string>
>("profile/profileData", async (_, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.get<Profile>("/profile");

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (err) {
        console.log(err);
        return rejectWithValue("error");
    }
});

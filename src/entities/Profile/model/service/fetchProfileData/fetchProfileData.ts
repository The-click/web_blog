import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<string>
>("profile/profileData", async (profileId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.get<Profile>(`/profile/${profileId}`);

        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (err) {
        console.log(err);
        return rejectWithValue("error");
    }
});

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";

import { Profile } from "entities/Profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { ValidateProfileError } from "../../types/editableProfileCardSchema";
import { validateProfile } from "../validateProfile/validateProfile";

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
>("profile/updateData", async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const formData = getProfileForm(getState());

    const errors = validateProfile(formData);

    if (errors.length) {
        return rejectWithValue(errors);
    }

    try {
        const response = await extra.api.put<Profile>(
            `/profile/${formData?.id}`,
            formData
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (err) {
        console.log(err);
        return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
});

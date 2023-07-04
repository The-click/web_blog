import { DeepPartial } from "@reduxjs/toolkit";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { profileActions, profileReducer } from "./profileSlice";
import { ProfileSchema, ValidateProfileError } from "../types/profile";
import { updateProfileData } from "../service/updateProfileData/updateProfileData";

const data = {
    first: "Тимур",
    lastname: "Ульби",
    age: 22,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Moscow",
    username: "admin",
};

describe("profileSlice.test", () => {
    test("test set readonly", () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true)
            )
        ).toEqual({ readonly: true });
    });
    test("test set cancelEditProfile", () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: "" },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.cancelEditProfile()
            )
        ).toEqual({
            form: data,
            readonly: true,
            validateError: undefined,
            data,
        });
    });

    test("test set updateProfile", () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: "admin", age: 22 },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    age: 34,
                    username: "user",
                })
            )
        ).toEqual({ form: { age: 34, username: "user" } });
    });

    test("test update profile service pending", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending)
        ).toEqual({ isLoading: true, validateError: undefined });
    });
    test("test update profile service fulfilled", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, "")
            )
        ).toEqual({
            isLoading: false,
            data,
            form: data,
            readonly: true,
            validateError: undefined,
        });
    });
});

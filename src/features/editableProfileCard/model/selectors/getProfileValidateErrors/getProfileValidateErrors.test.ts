import { StateSchema } from "app/providers/StoreProvider";

import { ValidateProfileError } from "../../types/editableProfileCardSchema";
import { getProfileValidateErrors } from "./getProfileValidateErrors";

describe("Profile: getProfileValidateErrors", () => {
    test("should return profile validate errors", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.INCORRECT_COUNTRY,
                    ValidateProfileError.NO_DATA,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
            ValidateProfileError.NO_DATA,
        ]);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            undefined
        );
    });
});

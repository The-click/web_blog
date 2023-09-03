import { StateSchema } from "app/providers/StoreProvider";

import { getProfileReadOnly } from "./getProfileReadOnly";

describe("Profile: getProfileReadOnly", () => {
    test("should return profile readonly", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadOnly(state as StateSchema)).toEqual(true);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined);
    });
});

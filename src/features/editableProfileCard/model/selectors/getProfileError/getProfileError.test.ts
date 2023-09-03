import { StateSchema } from "app/providers/StoreProvider";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { getProfileError } from "./getProfileError";

const data = {
    first: "Тимур",
    lastname: "Ульби",
    age: 22,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Moscow",
    username: "admin",
};

describe("Profile: getProfileError", () => {
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: "error",
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual("error");
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});

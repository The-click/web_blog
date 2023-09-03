import { StateSchema } from "app/providers/StoreProvider";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { getProfileForm } from "./getProfileForm";

const data = {
    first: "Тимур",
    lastname: "Ульби",
    age: 22,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Moscow",
    username: "admin",
};

describe("Profile: getProfileForm", () => {
    test("should return profile form", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});

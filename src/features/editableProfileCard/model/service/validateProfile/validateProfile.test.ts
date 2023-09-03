import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ValidateProfileError } from "../../types/editableProfileCardSchema";
import { validateProfile } from "./validateProfile";

const data = {
    first: "Тимур",
    lastname: "Ульби",
    age: 22,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Moscow",
    username: "admin",
};

describe("validateProfile data", () => {
    test("success", async () => {
        const result = validateProfile({
            ...data,
        });
        expect(result).toEqual([]);
    });

    test("without firstname and lastname", async () => {
        const result = validateProfile({
            ...data,
            first: "",
            lastname: "",
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test("incorrect age", async () => {
        const result = validateProfile({
            ...data,
            age: undefined,
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test("incorrect country", async () => {
        const result = validateProfile({
            ...data,
            country: undefined,
        });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });
    test("incorrect all", async () => {
        const result = validateProfile({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});

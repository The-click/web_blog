import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { ValidateProfileError } from "../../types/editableProfileCardSchema";
import { updateProfileData } from "./updateProfileData";

const data = {
    first: "Тимур",
    lastname: "Ульби",
    age: 22,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Moscow",
    username: "admin",
    id: "1",
};

describe("updateProfileData", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
    test("validate error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: "" },
            },
        });
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});

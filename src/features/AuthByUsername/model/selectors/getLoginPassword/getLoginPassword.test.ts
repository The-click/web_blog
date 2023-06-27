import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("AuthByUsername: getLoginPassword", () => {
    test("should return password", () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                password: "123",
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual("123");
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual(undefined);
    });
});

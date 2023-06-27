import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLocalState } from "./getLocalState";

describe("AuthByUsername: getLocalState", () => {
    test("should return login state", () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: "",
                password: "",
                isLoading: false,
            },
        };

        expect(getLocalState(state as StateSchema)).toEqual(state.login);
    });
});

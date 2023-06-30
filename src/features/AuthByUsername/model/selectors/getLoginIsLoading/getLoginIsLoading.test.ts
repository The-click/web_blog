import { StateSchema } from "app/providers/StoreProvider";
import { getLoginIsLoading } from "./getLoginIsLoading";

describe("AuthByUsername: getLoginIsLoading", () => {
    test("should return loading", () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                isLoading: true,
            },
        };

        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});

import { getQueryParams } from "./addQueryParams";

describe("addQueryParams.test", () => {
    test("test with one param", () => {
        const params = getQueryParams({
            test: "value",
        });
        expect(params).toEqual("?test=value");
    });
    test("test with multiple param", () => {
        const params = getQueryParams({
            test: "value",
            second: "2",
        });
        expect(params).toEqual("?test=value&second=2");
    });
    test("test with undefined", () => {
        const params = getQueryParams({
            test: "value",
            second: undefined,
        });
        expect(params).toEqual("?test=value");
    });
    test("test with initial query params", () => {
        jest.spyOn(window, "location", "get").mockReturnValue({
            ...window.location,
            search: "?abc=1&second=4",
        });

        const params = getQueryParams({
            test: undefined,
            second: "2",
        });

        expect(params).toBe("?abc=1&second=2");
    });
});

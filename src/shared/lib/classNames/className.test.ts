import { classNames } from "./classNames";

describe("classNames", () => {
    test("with only first param", () => {
        expect(classNames("className")).toBe("className");
    });
    test("with additional params", () => {
        const excepted = "className red blue";
        expect(classNames("className", {}, ["red", "blue"])).toBe(excepted);
    });
    test("with mods", () => {
        const excepted = "className red blue scrollable lazy";
        expect(
            classNames("className", { scrollable: true, lazy: true }, [
                "red",
                "blue",
            ])
        ).toBe(excepted);
    });
    test("with mod false", () => {
        const excepted = "className red blue scrollable";
        expect(
            classNames("className", { scrollable: true, lazy: false }, [
                "red",
                "blue",
            ])
        ).toBe(excepted);
    });
    test("with mod undefined", () => {
        const excepted = "className red blue scrollable lazy";
        expect(
            classNames("className", { scrollable: true, lazy: true }, [
                "red",
                "blue",
            ])
        ).toBe(excepted);
    });
});

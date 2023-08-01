import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import {
    getAddCommentFormText,
    getAddCommentFormError,
} from "./addCommentFormSelectors";

describe("AddCommentFormSelectors: getAddCommentFormText", () => {
    test("should return comment form text", () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: "text",
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual(
            state.addCommentForm?.text
        );
    });
    test("should work with empty state data", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual(undefined);
    });
});

describe("AddCommentFormSelectors: getAddCommentFormError", () => {
    test("should return form error", () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: "text",
                error: "Error",
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual(
            state.addCommentForm?.error
        );
    });
    test("should work with empty state data", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});

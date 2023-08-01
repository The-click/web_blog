import { DeepPartial } from "@reduxjs/toolkit";

import { AddCommentFormSchema } from "../type/addCommentForm";
import {
    addCommentFormActions,
    addCommentFormReducer,
} from "./addCommentFormSlice";

describe("addCommentFormSlice", () => {
    test("test set text", () => {
        const state: DeepPartial<AddCommentFormSchema> = {
            text: "",
        };

        expect(
            addCommentFormReducer(
                state as AddCommentFormSchema,
                addCommentFormActions.setText("new comment")
            )
        ).toEqual({ text: "new comment" });
    });
});

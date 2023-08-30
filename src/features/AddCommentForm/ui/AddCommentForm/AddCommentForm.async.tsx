import { FC, lazy } from "react";
import { AddCommentFormProps } from "./AddCommentForm";

export const AddCommentFromAsync = lazy<FC<AddCommentFormProps>>(
    () => import("./AddCommentForm")
);

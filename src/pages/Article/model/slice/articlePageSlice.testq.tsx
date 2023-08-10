// import { DeepPartial } from "@reduxjs/toolkit";

// import {
//     articlePageActions,
//     articlePageReducer,
// } from "./articlePageSlice";
// import { ArticlePageSchema } from "../type/articlePageSchema";

// describe("articlePageSlice", () => {
//     test("test set text", () => {
//         const state: DeepPartial<ArticlePageSchema> = {
//             isLoading: false,
//             error: undefined,
//             ids: [],
//             entities: {},
//             view: ArticleView.BIG,
//             page: 1,
//             limit: 9,
//             hasMore: true,
//             _inited: false,
//             search: "",
//             sort: ArticleSortField.CREATED,
//             order: "asc",
//             type: ArticleType.ALL,
//         };

//         expect(
//             addCommentFormReducer(
//                 state as AddCommentFormSchema,
//                 addCommentFormActions.setText("new comment")
//             )
//         ).toEqual({ text: "new comment" });
//     });
// });

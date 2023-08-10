import { EntityState } from "@reduxjs/toolkit";
import {
    Article,
    ArticleSortField,
    ArticleType,
    ArticleView,
} from "entities/Article";

import { SortOrder } from "shared/types/index";

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    view: ArticleView;
    // pagination
    page: number;
    limit: number;
    hasMore: boolean;

    // filters
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;

    _inited: boolean;
}

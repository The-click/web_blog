import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entities/Article";

import { UserSchema } from "entities/User";
import { AddCommentFormSchema } from "features/AddCommentForm";
import { LoginSchema } from "features/AuthByUsername";
import { ScrollSaveSchema } from "features/ScrollSave";
import { ProfileSchema } from "features/editableProfileCard";
import { ArticlePageSchema } from "pages/Article";
import { ArticleDetailsPageSchema } from "pages/ArticleDetails";
import { rtkApi } from "shared/api/rtkApi";

export interface StateSchema {
    user: UserSchema;
    scroll: ScrollSaveSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // Асинхронные редьюсеры
    login?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlePageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;
export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;

    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}

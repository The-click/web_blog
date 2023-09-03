import {
    CombinedState,
    configureStore,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";

import { userReducer } from "entities/User";
import { scrollSaveReducer } from "features/ScrollSave";
import { $api } from "shared/api/api";
import { rtkApi } from "shared/api/rtkApi";
import { createReducerManager } from "./reduceManager";
import { StateSchema, ThunkExtraArg } from "./StateSchema";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,

        user: userReducer,
        scroll: scrollSaveReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reduceManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };
    const store = configureStore({
        reducer: reduceManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reduceManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];

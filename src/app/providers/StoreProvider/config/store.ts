import {
    configureStore,
    DeepPartial,
    ReducersMapObject,
} from "@reduxjs/toolkit";
import { CounterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { $api } from "shared/api/api";
import { NavigateOptions, To } from "react-router-dom";
import { StateSchema } from "./StateSchema";
import { createReducerManager } from "./reduceManager";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: CounterReducer,
        user: userReducer,
    };

    const reduceManager = createReducerManager(rootReducers);
    const store = configureStore({
        reducer: reduceManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                        navigate,
                    },
                },
            }),
    });

    // @ts-ignore
    store.reducerManager = reduceManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];

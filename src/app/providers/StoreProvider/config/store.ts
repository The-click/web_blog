import {
    configureStore,
    DeepPartial,
    ReducersMapObject,
} from "@reduxjs/toolkit";
import { CounterReducer } from "entities/Counter";
import { userReducer } from "entities/User";

import { StateSchema } from "./StateSchema";
import { createReducerManager } from "./reduceManager";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: CounterReducer,
        user: userReducer,
    };

    const reduceManager = createReducerManager(rootReducers);
    const store = configureStore<StateSchema>({
        reducer: reduceManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reduceManager;

    return store;
}

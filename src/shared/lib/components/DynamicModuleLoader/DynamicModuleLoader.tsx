import React, { useEffect } from "react";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { useDispatch, useStore } from "react-redux";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";
import { type } from "os";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}
type ReducersListEntry = [StateSchemaKey, Reducer];
export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = (
    props
) => {
    const { children, reducers, removeAfterUnmount } = props;

    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(
            ([nameStateSchema, reducer]: ReducersListEntry) => {
                store.reducerManager.add(nameStateSchema, reducer);
                dispatch({ type: `@Init ${nameStateSchema} reducer` });
            }
        );

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(
                    ([nameStateSchema, reducer]: ReducersListEntry) => {
                        store.reducerManager.remove("login");
                        dispatch({
                            type: `@Destroy ${nameStateSchema} reducer`,
                        });
                    }
                );
            }
        };
        // eslint-disable-next-line
    }, []);

    return <>{children}</>;
};

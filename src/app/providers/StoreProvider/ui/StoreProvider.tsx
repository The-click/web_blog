import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { NavigateOptions, To, useNavigate } from "react-router-dom";
import { StateSchema } from "../config/StateSchema";
import { createReduxStore } from "../config/store";
import cls from "./StoreProvider.module.scss";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
    const { children, initialState, asyncReducers } = props;

    const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate
    );

    return <Provider store={store}>{children}</Provider>;
};

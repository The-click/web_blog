import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { Story } from "@storybook/api";
import { StoreProvider } from "app/providers/StoreProvider";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    login: loginReducer,
};

export const StoreDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
    ) =>
    (StoryComponent: () => Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <div>{StoryComponent()}</div>
            </StoreProvider>
        );

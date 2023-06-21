import { DeepPartial } from "@reduxjs/toolkit";
import { Story } from "@storybook/api";
import { StoreProvider } from "app/providers/StoreProvider";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const StoreDecorator =
    (state: DeepPartial<StateSchema>) => (StoryComponent: () => Story) =>
        (
            <StoreProvider initialState={state}>
                <div>{StoryComponent()}</div>
            </StoreProvider>
        );

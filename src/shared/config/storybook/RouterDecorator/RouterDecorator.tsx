import { Story } from "@storybook/api";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (StoryComponent: () => Story) => (
    <BrowserRouter>
        <Suspense fallback=""> {StoryComponent()}</Suspense>
    </BrowserRouter>
);

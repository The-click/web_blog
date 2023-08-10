import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Page } from "./Page";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "shared/Page",
    component: Page,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <div>PAge</div>,
    onScrollEnd: action("onScrollEnd"),
};
Normal.decorators = [StoreDecorator({})];

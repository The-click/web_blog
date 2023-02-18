import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { AppLink, AppLinkThem } from "./AppLink";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "shared/AppLink",
    component: AppLink,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    args: {
        to: "/",
    },
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: "Text",
    theme: AppLinkThem.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: "Text",
    theme: AppLinkThem.SECONDARY,
};

export const Red = Template.bind({});
Red.args = {
    children: "Text",
    theme: AppLinkThem.RED,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: "Text",
    theme: AppLinkThem.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: "Text",
    theme: AppLinkThem.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
    children: "Text",
    theme: AppLinkThem.RED,
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];

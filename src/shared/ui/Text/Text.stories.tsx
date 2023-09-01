import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Text, TextSize, TextTheme } from "./Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "shared/Text",
    component: Text,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "Title",
    text: "Text Text TextTextText",
};

export const Error = Template.bind({});
Error.args = {
    title: "Title",
    text: "Text Text TextTextText",
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: "Title",
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: "Text Text TextTextText",
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: "Title",
    text: "Text Text TextTextText",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: "Title",
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: "Text Text TextTextText",
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: "Title",
    text: "Text Text TextTextText",
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: "Title",
    text: "Text Text TextTextText",
    size: TextSize.M,
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: "Title",
    text: "Text Text TextTextText",
    size: TextSize.S,
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "./Select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "shared/Select",
    component: Select,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "label",
    options: [
        { value: "123", content: "First" },
        { value: "1234", content: "Second" },
    ],
};

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "shared/Input",
    component: Input,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: "enter text",
    value: "12322",
};

export const WithPrevText = Template.bind({});
WithPrevText.args = {
    placeholder: "enter text",
    value: "12322",
    prevText: "prev text",
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    placeholder: "enter text",
    value: "12322",
    readonly: true,
};

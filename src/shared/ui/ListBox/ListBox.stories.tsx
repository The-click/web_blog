import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Flex } from "../Stack/Flex/Flex";
import { ListBox } from "./ListBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "shared/ListBox",
    component: ListBox,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);
const TemplateWrap: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;
const people = [
    { value: "Durward Reynolds", content: "Durward Reynolds" },
    { value: "Kenton Towne", disabled: true, content: "Kenton Towne" },
    { value: "Therese Wunsch", content: "Therese Wunsch" },
    { value: "Benedict Kessler", content: "Benedict Kessler" },
    { value: "Katelyn Rohan", content: "Katelyn Rohan" },
];

export const Normal = Template.bind({});
Normal.args = {
    items: people,
    onChange: (value: string) => {},
    value: people[0].content,
    defaultValue: "Select people",
};
export const NormalDark = Template.bind({});
NormalDark.args = {
    items: people,
    onChange: (value: string) => {},
    value: people[0].value,
    defaultValue: "Select people",
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    items: people,
    onChange: (value: string) => {},
    value: people[0].content,
    defaultValue: "Select people",
    readonly: true,
};

export const DirectionTopLeft = Template.bind({});
DirectionTopLeft.args = {
    items: people,
    onChange: (value: string) => {},
    value: people[0].content,
    defaultValue: "Select people",
    direction: "top left",
};

export const DirectionTopRight = Template.bind({});
DirectionTopRight.args = {
    items: people,
    onChange: (value: string) => {},
    value: people[0].content,
    defaultValue: "Select people",
    direction: "top right",
};

export const DirectionBottomLeft = Template.bind({});
DirectionBottomLeft.args = {
    items: people,
    onChange: (value: string) => {},
    value: people[0].content,
    defaultValue: "Select people",
    direction: "bottom left",
};
export const DirectionBottomRight = Template.bind({});
DirectionBottomRight.args = {
    items: people,
    onChange: (value: string) => {},
    value: people[0].content,
    defaultValue: "Select people",
    direction: "bottom right",
};

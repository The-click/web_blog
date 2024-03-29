import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Flex } from "./Flex";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "shared/Flex",
    component: Flex,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>Flex</div> <div>Flex</div> <div>Flex</div> <div>Flex</div>
        </>
    ),
};
export const RowGap4 = Template.bind({});
RowGap4.args = {
    gap: "4",
    children: (
        <>
            <div>Flex</div> <div>Flex</div> <div>Flex</div> <div>Flex</div>
        </>
    ),
};
export const RowGap8 = Template.bind({});
RowGap8.args = {
    gap: "8",
    children: (
        <>
            <div>Flex</div> <div>Flex</div> <div>Flex</div> <div>Flex</div>
        </>
    ),
};
export const RowGap16 = Template.bind({});
RowGap16.args = {
    gap: "16",
    children: (
        <>
            <div>Flex</div> <div>Flex</div> <div>Flex</div> <div>Flex</div>
        </>
    ),
};
export const Column = Template.bind({});
Column.args = {
    direction: "column",
    children: (
        <>
            <div>Flex</div> <div>Flex</div> <div>Flex</div> <div>Flex</div>
        </>
    ),
};
export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    direction: "column",
    gap: "16",
    children: (
        <>
            <div>Flex</div> <div>Flex</div> <div>Flex</div> <div>Flex</div>
        </>
    ),
};

export const ColumnAlignCenter = Template.bind({});
ColumnAlignCenter.args = {
    direction: "column",
    align: "center",
    children: (
        <>
            <div>Flex</div> <div>Flex</div> <div>Flex</div> <div>Flex</div>
        </>
    ),
};
export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    direction: "column",
    align: "end",
    children: (
        <>
            <div>Flex</div> <div>Flex</div> <div>Flex</div> <div>Flex</div>
        </>
    ),
};

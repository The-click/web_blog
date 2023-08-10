import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleSortSelect } from "./ArticleSortSelect";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "entities/article/ArticleSortSelect",
    component: ArticleSortSelect,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticleSortSelect>;

const Template: ComponentStory<typeof ArticleSortSelect> = (args) => (
    <ArticleSortSelect {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

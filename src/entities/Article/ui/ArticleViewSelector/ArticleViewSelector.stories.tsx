import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleViewSelector } from "./ArticleViewSelector";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "entities/article/ArticleViewSelector",
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
    <ArticleViewSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

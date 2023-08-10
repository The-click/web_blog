import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleTypeTabs } from "./ArticleTypeTabs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "entities/article/ArticleTypeTabs",
    component: ArticleTypeTabs,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => (
    <ArticleTypeTabs {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

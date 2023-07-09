import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ArticlePage from "./ArticlePage";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "entities/ArticlePage",
    component: ArticlePage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticlePage>;

const Template: ComponentStory<typeof ArticlePage> = (args) => (
    <ArticlePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

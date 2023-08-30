import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "shared/ArticleDetailsPageHeader",
    component: ArticleDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => (
    <ArticleDetailsPageHeader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

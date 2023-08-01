import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { CommentCard } from "./CommentCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "entities/Comment/CommentCard",
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: "1",
        text: "hello world",
        user: { id: "1", username: "Vasya" },
    },
};

export const isLoading = Template.bind({});
isLoading.args = {
    comment: {
        id: "1",
        text: "hello world",
        user: { id: "1", username: "Vasya" },
    },
    isLoading: true,
};
export const isLoadingDark = Template.bind({});
isLoadingDark.args = {
    comment: {
        id: "1",
        text: "hello world",
        user: { id: "1", username: "Vasya" },
    },
    isLoading: true,
};
isLoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

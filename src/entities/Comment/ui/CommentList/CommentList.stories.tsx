import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { CommentList } from "./CommentList";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "entities/Comment/CommentList",
    component: CommentList,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        { id: "1", text: "hello world", user: { id: "1", username: "Vasya" } },
        { id: "2", text: "Comment", user: { id: "1", username: "Vasya" } },
    ],
};
Normal.decorators = [StoreDecorator({})];

export const isLoading = Template.bind({});
isLoading.args = {
    comments: [
        { id: "1", text: "hello world", user: { id: "1", username: "Vasya" } },
        { id: "2", text: "Comment", user: { id: "1", username: "Vasya" } },
    ],
    isLoading: true,
};

isLoading.decorators = [StoreDecorator({})];

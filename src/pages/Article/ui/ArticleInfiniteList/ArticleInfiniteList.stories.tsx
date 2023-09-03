import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticleInfiniteList } from "./ArticleInfiniteList";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "page/article/ArticleInfiniteList",
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => (
    <ArticleInfiniteList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];

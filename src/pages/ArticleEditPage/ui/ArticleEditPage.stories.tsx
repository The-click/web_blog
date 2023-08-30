import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticleEditPage } from "./ArticleEditPage";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "shared/ArticleEditPage",
    component: ArticleEditPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => (
    <ArticleEditPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

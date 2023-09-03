import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "pages/articleDetails/ArticleDetailsPageHeader",
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
Normal.decorators = [StoreDecorator({})];

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticlesPageFilters } from "./ArticlesPageFilters";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "pages/article/ArticlesPageFilters",
    component: ArticlesPageFilters,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => (
    <ArticlesPageFilters {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];

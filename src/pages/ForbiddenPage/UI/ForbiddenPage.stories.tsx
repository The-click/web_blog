import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ForbiddenPage } from "./ForbiddenPage";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "shared/ForbiddenPage",
    component: ForbiddenPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = (args) => (
    <ForbiddenPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

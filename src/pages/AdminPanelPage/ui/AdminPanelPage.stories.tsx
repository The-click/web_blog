import { ComponentMeta, ComponentStory } from "@storybook/react";
import AdminPanelPage from "./AdminPanelPage";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "shared/AdminPanelPage",
    component: AdminPanelPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = (args) => (
    <AdminPanelPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

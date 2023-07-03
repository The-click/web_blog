import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AvatarImg from "../../assets/icon/iconProfile.jpg";
import { Avatar } from "./Avatar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "shared/Avatar",
    component: Avatar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: AvatarImg,
    size: 150,
};

export const Small = Template.bind({});
Small.args = {
    src: AvatarImg,
    size: 50,
};

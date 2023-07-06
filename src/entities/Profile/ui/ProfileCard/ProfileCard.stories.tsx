import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { avatarImgSrc } from "shared/const/srcForImg";
import { ProfileCard } from "./ProfileCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

const data = {
    first: "Тимур",
    lastname: "Ульби",
    age: 22,
    currency: Currency.RUB,
    country: Country.Russia,
    city: "Moscow",
    username: "admin",
    avatar: avatarImgSrc,
};

export const Primary = Template.bind({});
Primary.args = {
    data,
};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
    error: "error",
};

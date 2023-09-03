import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { avatarImgSrc } from "shared/const/srcForImg";
import ProfilePage from "./ProfilePage";

export default {
    title: "pages/ProfilePage",
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
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

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        profile: {
            form: data,
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: data,
        },
    }),
];

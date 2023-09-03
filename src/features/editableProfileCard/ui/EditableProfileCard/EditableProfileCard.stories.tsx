import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { avatarImgSrc } from "shared/const/srcForImg";
import { EditableProfileCard } from "./EditableProfileCard";

export default {
    title: "features/EditableProfileCard/EditableProfileCard",
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
    <EditableProfileCard {...args} />
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
export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        profile: { data },
    }),
];

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { avatarImgSrc } from "shared/const/srcForImg";

import { EditableProfileCardHeader } from "./EditableProfileCardHeader";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "features/EditableProfileCard/EditableProfileCardHeader",
    component: EditableProfileCardHeader,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => (
    <EditableProfileCardHeader {...args} />
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

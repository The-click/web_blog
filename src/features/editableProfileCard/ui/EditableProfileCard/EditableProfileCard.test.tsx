import { screen } from "@testing-library/react";
import { Country } from "entities/Country";

import userEvent from "@testing-library/user-event";
import { Currency } from "entities/Currency";
import { Profile } from "entities/Profile";
import { $api } from "shared/api/api";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { profileReducer } from "../../model/slice/profileSlice";
import { EditableProfileCard } from "./EditableProfileCard";

const data: Profile = {
    id: "1",
    first: "admin",
    lastname: "admin",
    age: 465,
    currency: Currency.EUR,
    country: Country.Belarus,
    city: "Moscow",
    username: "admin213",
    avatar: "https://avatars.mds.yandex.net/get-zen_doc/3413519/pub_5ff887b2fe4e686f6ae6ba3f_5ff887d7f906b16872a69755/scale_1200",
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data,
            form: data,
        },
        user: {
            authData: { id: "1", username: "admin" },
        },
    },
    asyncReducers: { profile: profileReducer },
};

describe("EditableProfileCard", () => {
    beforeEach(() => {
        componentRender(<EditableProfileCard id="1" />, options);
        jest.spyOn($api, "get").mockReturnValue(
            Promise.resolve({
                data,
            })
        );
    });
    test("Change state profile edit", async () => {
        const user = userEvent.setup();
        await user.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton")
        );
        expect(
            screen.getByTestId("EditableProfileCardHeader.CancelButton")
        ).toBeInTheDocument();
    });
    test("Change state profile cancel", async () => {
        const user = userEvent.setup();
        await user.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton")
        );
        await user.clear(screen.getByTestId("ProfileCard.firstname"));
        await user.clear(screen.getByTestId("ProfileCard.lastname"));
        await user.type(screen.getByTestId("ProfileCard.firstname"), "user");
        await user.type(screen.getByTestId("ProfileCard.lastname"), "user");
        expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("user");
        expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("user");
        await user.click(
            screen.getByTestId("EditableProfileCardHeader.CancelButton")
        );
        expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue(
            "admin"
        );
        expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("admin");
    });
    test("Change state profile error", async () => {
        jest.spyOn($api, "get");
        const user = userEvent.setup();
        await user.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton")
        );
        await user.clear(screen.getByTestId("ProfileCard.firstname"));

        await user.click(
            screen.getByTestId("EditableProfileCardHeader.SaveButton")
        );
        expect(
            screen.getByTestId("EditableProfileCard.Error.Paragraph")
        ).toBeInTheDocument();
    });
    test("Change state profile Put query", async () => {
        const mockPutReq = jest.spyOn($api, "put");
        const user = userEvent.setup();
        await user.click(
            screen.getByTestId("EditableProfileCardHeader.EditButton")
        );
        await user.type(screen.getByTestId("ProfileCard.firstname"), "user");

        await user.click(
            screen.getByTestId("EditableProfileCardHeader.SaveButton")
        );
        expect(mockPutReq).toHaveBeenCalled();
    });
});

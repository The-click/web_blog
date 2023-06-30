import { Country, Currency } from "shared/const/common";

export interface Profile {
    first: string;
    lastname: string;
    app: number;
    currency: Currency;
    country: Country;
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly?: boolean;
}
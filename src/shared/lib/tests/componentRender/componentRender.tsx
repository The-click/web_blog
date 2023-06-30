import { render } from "@testing-library/react";
import { StoreProvider } from "app/providers/StoreProvider";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import i18nForTest from "shared/config/i18n/i18nForTest";

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export function componentRender(
    component: ReactNode,
    options: componentRenderOptions = {}
) {
    const { route = "/", initialState } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}

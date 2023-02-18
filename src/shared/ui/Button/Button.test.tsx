import { Button } from "shared/ui/Button/Button";
import { render, screen } from "@testing-library/react";
import { ThemeButton } from "./Button";

describe("Button", () => {
    test("To be in the document", () => {
        render(<Button>Test</Button>);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
    test("To have class ", () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText("Test")).toHaveClass("clear");
    });
});

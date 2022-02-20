import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../setupTests";
import MainPage from "./mainPage";

describe("Given a main page component", () => {
  describe("When it is instancied", () => {
    test("It should render a title", () => {
      renderWithProviders(
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      );

      const title = screen.getByText("Robots List");

      expect(title).toBeInTheDocument();
    });
  });
});

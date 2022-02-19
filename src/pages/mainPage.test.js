import { screen, render } from "@testing-library/react";
import MainPage from "./mainPage";

describe("Given a main page component", () => {
  describe("When it is instancied", () => {
    test("It should render a title", () => {
      render(<MainPage />);

      const title = screen.getByText("Robots");

      expect(title).toBeInTheDocument();
    });
  });
});

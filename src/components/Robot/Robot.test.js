import { screen } from "@testing-library/react";
import renderWithProviders from "../../setupTests";

import Robot from "./Robot";

describe("Given a Robot component", () => {
  describe("When it is instancied", () => {
    test("It should render a heading", () => {
      const robot = {
        id: 1,
        name: "Pepe",
        image: "unafoto",
        velocity: "3",
        resistence: "7",
        creation: "2019",
      };
      renderWithProviders(<Robot robot={robot} />);

      const heading = screen.getByRole("heading", { name: "Pepe" });

      expect(heading).toBeInTheDocument();
    });
  });
});

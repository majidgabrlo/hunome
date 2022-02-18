import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("if props works properly", () => {
  render(<Card title="High Hopes" image="" artist="Pink Floyd" price="10$" />);
  const valueElement = screen.getAllByTestId("field-value");
  expect(valueElement[0].textContent).toBe("Pink Floyd");
  expect(valueElement[1].textContent).toBe("High Hopes");
  expect(valueElement[2].textContent).toBe("10$");
});

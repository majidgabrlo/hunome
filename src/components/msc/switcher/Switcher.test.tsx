import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Switcher from "./Switcher";

test("if Switcher works properly", () => {
  render(<Switcher title="Name" value="Justin Bieber" />);
  const inputElement: any = screen.getByTestId("switcher-input");
  expect(inputElement).not.toBeChecked();
  fireEvent(inputElement,new MouseEvent('click'))
  
  expect(inputElement).toBeChecked();

});

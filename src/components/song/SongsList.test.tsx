import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SongsList from "./SongsList";

test("if there is a spinner before data", () => {
  render(<SongsList />);
  const spinner = screen.getByTestId("spinner-test-id");
  expect(spinner).toBeInTheDocument();
});

test("if the App shows 30 albums", async () => {
  render(<SongsList />);
  const cards = await screen.findAllByTestId("card-container");
  expect(cards).toHaveLength(30);
});




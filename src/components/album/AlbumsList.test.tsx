import React from "react";
import { render, screen } from "@testing-library/react";
import AlbumList from "./AlbumsList";

test("if there is a spinner before data", () => {
  render(<AlbumList />);
  const spinner = screen.getByTestId("spinner-test-id");
  expect(spinner).toBeInTheDocument();
});

test("if the App shows 30 albums", async () => {
  render(<AlbumList />);
  const cards = await screen.findAllByTestId("card-container");
  expect(cards).toHaveLength(30);
});


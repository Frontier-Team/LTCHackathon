import { screen } from "@testing-library/react";
import React from "react";
import { GamePage } from "../src/pages/GamePage";
import { renderWithProviders } from "./test-utils";

jest.mock("../src/components/Game", () => ({
  Game: jest.fn(() => <div>Mocked Game Component</div>),
}));

describe("GamePage component", () => {
  it("should render the heading and description", () => {
    renderWithProviders(<GamePage />);
    expect(screen.getByText("Game Example")).toBeInTheDocument();
    expect(screen.getByText("Here is an example of a game we built using Unity and React Unity WebGL for integrating into a web application.")).toBeInTheDocument();
  });

  it("should render the Game component", () => {
    renderWithProviders(<GamePage />);
    expect(screen.getByText("Mocked Game Component")).toBeInTheDocument();
  });
});



import { screen } from "@testing-library/react";
import React from "react";
import HeroComponent from "../src/components/HeroComponent";
import { renderWithProviders } from "./test-utils";

// Mock the image import
jest.mock("../src/assets/logo-optimized.gif", () => "ELT.gif");

describe("HeroComponent", () => {
  test("renders without crashing", () => {
    renderWithProviders(<HeroComponent />);
  });

  test("renders the title", () => {
    renderWithProviders(<HeroComponent />);
    expect(screen.getByText(/Welcome to/)).toBeInTheDocument();
    expect(screen.getByText(/Game Jam Dundee/)).toBeInTheDocument();
  });

  test("renders the subtitle", () => {
    renderWithProviders(<HeroComponent />);
    expect(
      screen.getByText(
        "Join us for an exciting event full of creativity and innovation!"
      )
    ).toBeInTheDocument();
  });

  test("renders the GIF image", () => {
    renderWithProviders(<HeroComponent />);
    const gifImage = screen.getByAltText("Game Jam Animation");
    expect(gifImage).toBeInTheDocument();
    expect(gifImage).toHaveAttribute("src", "logo-optimized.gif");
  });
});

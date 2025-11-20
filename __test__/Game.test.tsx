/* eslint-disable @typescript-eslint/no-require-imports */
import { screen, waitFor, cleanup } from "@testing-library/react";
import React from "react";
import { Game } from "../src/components/Game";
import { renderWithProviders } from "./test-utils";

jest.mock("react-unity-webgl", () => ({
  Unity: jest.fn(),
  useUnityContext: jest.fn(),
}));

describe("Game component", () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("should display loading spinner while game is loading", () => {
    require("react-unity-webgl").useUnityContext.mockImplementationOnce(() => ({
      unityProvider: {},
      isLoaded: false,
      initialisationError: null,
      unload: jest.fn().mockResolvedValue(undefined),
    }));

    renderWithProviders(<Game />);
    expect(screen.getByTestId("pacman-loader")).toBeInTheDocument();
  });

  it("should show game content when loaded", async () => {
    require("react-unity-webgl").Unity.mockImplementationOnce(() => (
      <div>Mocked Unity component</div>
    ));
    require("react-unity-webgl").useUnityContext.mockImplementationOnce(() => ({
      unityProvider: {},
      isLoaded: true,
      initialisationError: null,
      unload: jest.fn().mockResolvedValue(undefined),
    }));

    renderWithProviders(<Game />);
    await waitFor(() => {
      expect(screen.getByText("Mocked Unity component")).toBeInTheDocument();
    });
  });

  it("should display error message if initialisation fails", () => {
    require("react-unity-webgl").useUnityContext.mockImplementationOnce(() => ({
      unityProvider: {},
      isLoaded: false,
      initialisationError: true,
      unload: jest.fn().mockResolvedValue(undefined),
    }));

    renderWithProviders(<Game />);
    expect(screen.getByText("Oops, sorry! There was an error loading the game!")).toBeInTheDocument();
  });

  it("should call unload when component unmounts", () => {
    const mockUnload = jest.fn().mockResolvedValue(undefined);
    require("react-unity-webgl").useUnityContext.mockImplementationOnce(() => ({
      unityProvider: {},
      isLoaded: true,
      initialisationError: null,
      unload: mockUnload,
    }));

    const { unmount } = renderWithProviders(<Game />);
    unmount();
    expect(mockUnload).toHaveBeenCalled();
  });
});

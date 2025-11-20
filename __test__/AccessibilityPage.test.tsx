import { screen } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import { AccessibilityPage } from "../src/pages/AccessibilityPage";

describe("Accessibility tests", () => {
  it("renders page with right heading and subheading", () => {
    renderWithProviders(<AccessibilityPage />);
    expect(screen.getByText("V&A Museum Accessibility")).toBeInTheDocument();
    expect(
      screen.getByText("1 Riverside Esplanade, Dundee, DD1 4EZ, Scotland")
    ).toBeInTheDocument();
  });

  it("renders parking information", () => {
    renderWithProviders(<AccessibilityPage />);
    expect(screen.getByText("Parking")).toBeInTheDocument();
    expect(
      screen.getByText(/There are disabled parking bays outside the museum/i)
    ).toBeInTheDocument();
  });

  it("renders assistance dogs information", () => {
    renderWithProviders(<AccessibilityPage />);
    expect(screen.getByText("Assistance dogs")).toBeInTheDocument();
    expect(
      screen.getByText(
        /You are welcome to bring guide dogs and other recognised assistance dogs/i
      )
    ).toBeInTheDocument();
  });

  it("renders wheelchairs for hire information", () => {
    renderWithProviders(<AccessibilityPage />);
    expect(screen.getByText("Wheelchairs for hire")).toBeInTheDocument();
    expect(
      screen.getByText(/A limited number of wheelchairs are available/i)
    ).toBeInTheDocument();
  });

  it("renders lifts information", () => {
    renderWithProviders(<AccessibilityPage />);
    expect(screen.getByText("Lifts")).toBeInTheDocument();
    expect(
      screen.getByText(/Lifts are available to all floors/i)
    ).toBeInTheDocument();
  });

  it("renders alternative access information", () => {
    renderWithProviders(<AccessibilityPage />);
    expect(screen.getByText("Alternative access")).toBeInTheDocument();
    expect(
      screen.getByText(/For groups and individuals with limited mobility/i)
    ).toBeInTheDocument();
  });

  it("renders toilets information", () => {
    renderWithProviders(<AccessibilityPage />);
    expect(screen.getByText("Toilets")).toBeInTheDocument();
    expect(
      screen.getByText(/Accessible toilets are available on all floors/i)
    ).toBeInTheDocument();
  });

  it("renders quiet room information", () => {
    renderWithProviders(<AccessibilityPage />);
    expect(screen.getByText("Quiet room")).toBeInTheDocument();
    expect(screen.getByText(/A quiet room is available/i)).toBeInTheDocument();
  });

  it("renders seating information", () => {
    renderWithProviders(<AccessibilityPage />);
    expect(screen.getByText("Seating")).toBeInTheDocument();
    expect(
      screen.getByText(
        /There is a range of seating provided around the museum/i
      )
    ).toBeInTheDocument();
  });
});

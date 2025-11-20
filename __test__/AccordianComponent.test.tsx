import "@testing-library/jest-dom/extend-expect";
import { fireEvent } from "@testing-library/react";
import React from "react";
import Accordion from "../src/components/Accordion";
import { renderWithProviders } from "./test-utils";

describe("Accordion", () => {
  test("render the title and children", () => {
    const { getByText } = renderWithProviders(
      <Accordion title="Test Title">
        <div>Test Content</div>
      </Accordion>
    );

    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByText("Test Content")).toBeInTheDocument();
  });

  test("toggles content visibility on click", () => {
    const { getByText, queryByText } = renderWithProviders(
      <Accordion title="Test Title">
        <div>Test Content</div>
      </Accordion>
    );

    const titleElement = getByText("Test Title");
    expect(queryByText("Test Content")).not.toBeVisible();

    fireEvent.click(titleElement);
    expect(queryByText("Test Content")).toBeVisible();

    fireEvent.click(titleElement);
    expect(queryByText("Test Content")).not.toBeVisible();
  });

  test("chevron icon changes on click", () => {
    const { getByText, getByTestId } = renderWithProviders(
      <Accordion title="Test Title">
        <div>Test Content</div>
      </Accordion>
    );

    const titleElement = getByText("Test Title");
    expect(getByTestId("chevron-down")).toBeInTheDocument();

    fireEvent.click(titleElement);
    expect(getByTestId("chevron-up")).toBeInTheDocument();

    fireEvent.click(titleElement);
    expect(getByTestId("chevron-down")).toBeInTheDocument();
  });
});

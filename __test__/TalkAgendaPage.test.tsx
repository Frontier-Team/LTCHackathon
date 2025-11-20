import React from "react";
import { screen } from "@testing-library/react";
import { TalkAgendaPage } from "../src/pages/TalkAgendaPage";
import { renderWithProviders } from "./test-utils";

describe("TalkAgendaPage component", () => {
  it("renders the page title", () => {
    renderWithProviders(<TalkAgendaPage />);
    const titleElement = screen.getByText(/Agenda/i);
    expect(titleElement).toBeInTheDocument();
  });
});

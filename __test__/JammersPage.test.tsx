import "@testing-library/jest-dom/extend-expect";
import React from "react";
import db from "../src/db.json";
import { JammerPage } from "../src/pages/JammerPage";
import { renderWithProviders } from "./test-utils";

describe("JammerPage", () => {
  it("renders welcome message and description", () => {
    const { getByText } = renderWithProviders(<JammerPage />);

    expect(getByText(db.jammers[0].welcome)).toBeInTheDocument();
    expect(getByText(db.jammers[0].welcomeDescription)).toBeInTheDocument();
  });

  it("renders challenge title and description", () => {
    const { getByText } = renderWithProviders(<JammerPage />);

    expect(getByText(db.jammers[0].challengeTitle)).toBeInTheDocument();
    expect(getByText(db.jammers[0].challengeDescription)).toBeInTheDocument();
  });

  it("renders judging criteria", () => {
    const { getByText } = renderWithProviders(<JammerPage />);

    db.jammers[0].judgingCriteria.criteria.forEach((criteria) => {
      expect(getByText(criteria.title)).toBeInTheDocument();
      expect(getByText(criteria.description)).toBeInTheDocument();
    });
  });
});

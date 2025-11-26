import "@testing-library/jest-dom/extend-expect";
import db from "../src/db.json";
import { HackersPage } from "../src/pages/HackersPage";
import { renderWithProviders } from "./test-utils";

describe("HackersPage", () => {
  it("renders welcome message and description", () => {
    const { getByText } = renderWithProviders(<HackersPage />);

    expect(getByText(db.hackers[0].welcome)).toBeInTheDocument();
    expect(getByText(db.hackers[0].welcomeDescription)).toBeInTheDocument();
  });

  it("renders challenge title and description", () => {
    const { getByText } = renderWithProviders(<HackersPage />);

    expect(getByText(db.hackers[0].challengeTitle)).toBeInTheDocument();
    expect(getByText(db.hackers[0].challengeDescription)).toBeInTheDocument();
  });

  it("should render judging criteria", () => {
    const { getByText } = renderWithProviders(<HackersPage />);

    db.hackers[0].judgingCriteria.criteria.forEach((criteria) => {
      expect(getByText(criteria.title)).toBeInTheDocument();
      expect(getByText(criteria.description)).toBeInTheDocument();
    });
  });
});

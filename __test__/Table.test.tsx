import { screen } from "@testing-library/react";
import { Table } from "../src/components/Table";
import { renderWithProviders } from "./test-utils";

interface TestData {
  id: number;
  name: string;
  age: number;
}

const headers = ["ID", "Name", "Age"];
const fieldsToDisplay: (keyof TestData)[] = ["id", "name", "age"];
const rows: TestData[] = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
];

describe("Table component", () => {
  test("renders table with headers", () => {
    renderWithProviders(
      <Table headers={headers} fieldsToDisplay={fieldsToDisplay} rows={rows} />
    );
    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  test("renders table rows with correct data", () => {
    renderWithProviders(
      <Table headers={headers} fieldsToDisplay={fieldsToDisplay} rows={rows} />
    );
    rows.forEach((row) => {
      expect(screen.getByText(String(row.id))).toBeInTheDocument();
      expect(screen.getByText(row.name)).toBeInTheDocument();
      expect(screen.getByText(String(row.age))).toBeInTheDocument();
    });
  });

  test("renders heading if provided", () => {
    const heading = "Test Heading";
    renderWithProviders(
      <Table
        heading={heading}
        headers={headers}
        fieldsToDisplay={fieldsToDisplay}
        rows={rows}
      />
    );
    expect(screen.getByText(heading)).toBeInTheDocument();
  });

  test("applies large class to specified fields", () => {
    renderWithProviders(
      <Table headers={headers} fieldsToDisplay={fieldsToDisplay} rows={rows} />
    );
    rows.forEach((row) => {
      expect(screen.getByText(row.name)).toHaveClass("large");
    });
  });
});

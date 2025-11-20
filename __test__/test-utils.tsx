import { ThemeProvider } from "@emotion/react";
import { render, RenderOptions } from "@testing-library/react";
import React, { ReactElement } from "react";
import { theme } from "../src/providers/ThemeProvider";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const renderWithProviders = (
  ui: ReactElement,
  options?: RenderOptions
) => render(ui, { wrapper: AllTheProviders, ...options });

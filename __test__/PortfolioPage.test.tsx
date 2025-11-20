import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AuctionPage } from '../src/pages/AuctionPage';
import { renderWithProviders } from "./test-utils";
import data from '../src/db.json';

describe('PortfolioPage', () => {
  test('renders the heading', () => {
    renderWithProviders(<AuctionPage />);
    const headingElement = screen.getByText(/Here are some details of the artists we are showcasing/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the table with correct headers', () => {
    renderWithProviders(<AuctionPage />);
    const headers = ['Name', 'Occupation', 'Details', 'Get in touch'];
    headers.forEach(header => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  test('renders the table with correct data', () => {
    renderWithProviders(<AuctionPage />);
    data.auctionWorks.forEach((portfolioItem) => {
      expect(screen.getByText(portfolioItem.name)).toBeInTheDocument();
    });
  });
});

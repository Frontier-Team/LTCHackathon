import styled from "@emotion/styled";
import { buttonAndLinkStyles } from "../styles/sharedStyles";

export const Heading = styled.div`
  text-align: center;
`;

export const TableContainer = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 2rem;

  .table-heading,
  .info-text {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
    margin-bottom: 1rem;
    text-align: center;
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 10px;
    min-width: 30rem;
    margin-bottom: 4rem;
    overflow: hidden;
  }

  th,
  td {
    padding: 1rem;
    text-align: left;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.teal}`};
  }

  .filter-heading-cell {
    padding: 0;
  }

  .table-link {
    color: ${({ theme }) => theme.colors.lilac};
  }

  .favorites-btn {
    ${({ theme }) => buttonAndLinkStyles(theme)}
    padding: 0;
  }

  thead tr:first-of-type th:first-of-type {
    border-top-left-radius: 1rem;
  }

  thead tr:first-of-type th:last-child {
    border-top-right-radius: 1rem;
  }

  tbody tr:last-child td:first-of-type {
    border-bottom-left-radius: 1rem;
  }

  tbody tr:last-child td:last-child {
    border-bottom-right-radius: 1rem;
  }

  td:first-of-type {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  thead tr {
    background-color: ${({ theme }) => `${theme.colors.teal}`};
    color: ${({ theme }) => `${theme.colors.white}`};
  }

  .checkbox-column {
    text-align: center;
  }

  .large {
    min-width: 10rem;
    flex-grow: 2;
    word-wrap: break-word;
  }

  .info-text {
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
    }
  }
`;

export const StyledTableHeadingButton = styled.div`
  ${({ theme }) => buttonAndLinkStyles(theme)}
  border: none !important;
  border-radius: 0 !important;
  text-align: center !important;
  box-shadow: none !important;
  width: 100%;
`;

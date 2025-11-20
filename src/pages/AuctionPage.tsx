import { Portfolio } from "../types";
import data from "../db.json";
import { Table } from "../components/Table";
import { Heading, PageContainer, Paragraph } from "../styles/sharedStyles";

export const AuctionPage = () => {
  const headers = ["Name", "Occupation", "Details", "Get in touch"];

  const fieldsToDisplay: (keyof Portfolio)[] = [
    "name",
    "occupation",
    "details",
    "contact",
  ];

  return (
    <PageContainer>
      <Heading>Auction</Heading>
      <Paragraph>
        During the event there will be an auction of several pieces from a
        select group of artists. All proceeds of the auction will go to support
        the V&A Museum.
      </Paragraph>
      <Table
        heading="Here are some details of the artists we are showcasing."
        headers={headers}
        rows={data.auctionWorks}
        fieldsToDisplay={fieldsToDisplay}
      />
    </PageContainer>
  );
};

import { Table } from "../components/Table";
import data from "../db.json";
import {
  CenteredParagraph,
  Heading,
  PageContainer,
} from "../styles/sharedStyles";
import { Expo } from "../types";

export const ExpoPage = () => {
  const headers = ["Name", "Description"];

  const fieldsToDisplay: (keyof Expo)[] = ["name", "description"];

  return (
    <PageContainer>
      <Heading>Expo</Heading>
      <CenteredParagraph>
        You will be taken round in the expo in groups - the table below gives
        you an insight into what you'll see!
      </CenteredParagraph>

      <Table
        headers={headers}
        rows={data.expos}
        fieldsToDisplay={fieldsToDisplay}
      />
    </PageContainer>
  );
};

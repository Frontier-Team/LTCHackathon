import {
  CenteredParagraph,
  Heading,
  PageContainer,
} from "../styles/sharedStyles";
import { Timeline } from "../components/Timeline";
import data from "../db.json";

export const SchedulePage = () => {
  return (
    <PageContainer>
      <Heading>Schedule of the Day</Heading>
      <CenteredParagraph>
        Find below the high level running order - for information on the the
        content and timings please refer to the Agenda tab.
      </CenteredParagraph>
      <Timeline schedule={data.schedule} />
    </PageContainer>
  );
};

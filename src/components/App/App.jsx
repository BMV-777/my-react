import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoarder } from 'components/EventBoard/EventBoard';
import upcomingEvent from '../../upcoming-events.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <PageTitle title={'24TH CORE Worlds Coalition Conference'} />
      <EventBoarder events={upcomingEvent} />
    </Container>
  );
};

import { Event } from 'components/Event/Event';
import { EventBoard } from './EventBoard.module';

export const EventBoarder = ({ events }) => {
  return (
    <EventBoard>
      {events.map(({ name, location, speaker, type, time }) => (
        <Event
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />
      ))}
    </EventBoard>
  );
};

//  import PropTypes from 'prop-types';
import { formatEventDuration, formatEventStart } from 'utils';
import { iconsSize } from 'contants';
import css from './Event.module.css';
import { Card, Title, Info, Chip } from './Event.styled';

import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUserAlt,
} from 'react-icons/fa';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formateTime = formatEventStart(start);
  const formatDistance = formatEventDuration(start, end);
  return (
    <Card>
      <Title>{name}</Title>
      <Info>
        <FaMapMarkerAlt className={css.icon} size={iconsSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt className={css.icon} size={iconsSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt className={css.icon} size={iconsSize.sm} />
        {formateTime}
      </Info>
      <Info>
        <FaClock className={css.icon} size={iconsSize.sm} />
        {formatDistance}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
};
// free|paid|vip
// Event.PropTypes = {
//   name: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   speaker: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   start: PropTypes.boolean.isRequired,
//   end: PropTypes.boolean.isRequired,
// };

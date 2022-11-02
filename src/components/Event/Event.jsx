// import PropTypes from 'prop-types';
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUserAlt,
} from 'react-icons/fa';
// import { formatEventStart } from 'utils/formatEventStart';
// import { formatEventDuration } from 'utils/formatEventDuration';
import { formatEventDuration, formatEventStart } from 'utils';
import css from './Event.module.css';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formateTime = formatEventStart(start);
  const formatDistance = formatEventDuration(start, end);
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} size={16} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} size={16} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} size={16} />
        {formateTime}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} size={16} />
        {formatDistance}
      </p>
      <span className={`${css.chip} ${css[type]} `}>{type}</span>
    </div>
  );
};
// free|paid|vip"
// Event.PropTypes = {
//   name: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   speaker: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   start: PropTypes.boolean.isRequired,
//   end: PropTypes.boolean.isRequired,
// };

//

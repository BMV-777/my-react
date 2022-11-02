import PropTypes from 'prop-types';
import css from './PageTitle.module.css';

export const PageTitle = ({ title }) => {
  return <h1 className={css.title}>{title}</h1>;
};

// PageTitle.PropTypes = {
//   text: PropTypes.string.isRequired,
// };

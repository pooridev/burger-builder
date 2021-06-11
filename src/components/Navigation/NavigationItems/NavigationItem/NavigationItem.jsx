import classes from './NavigationItem.module.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const navigationItem = props => (
  <li className={classes.NavigationItem}>
    <NavLink exact to={props.link} activeClassName={classes.Active}>
      {props.children}
    </NavLink>
  </li>
);

navigationItem.propTypes = {
  link: PropTypes.string,
  active: PropTypes.bool
};

export default navigationItem;

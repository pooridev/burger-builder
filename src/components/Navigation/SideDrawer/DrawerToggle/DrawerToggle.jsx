import classes from './DrawerToggle.module.css';
import PropTypes from 'prop-types';
const drawerToggle = props => (
	<div onClick={props.clicked} className={classes.DrawerToggle}>
		<div></div>
		<div></div>
		<div></div>
	</div>
);

drawerToggle.propTypes = {
	clicked: PropTypes.func
};

export default drawerToggle;

import classes from './BuildControl.module.css';
import PropTypes from 'prop-types';
const buildControl = props => (
	<div className={classes.BuildControl}>
		<div className={classes.Label}>{props.label}</div>
		<button
			className={classes.Less}
			onClick={props.removed}
			disabled={props.disabled}>
			Less
		</button>
		<button className={classes.More} onClick={props.added}>
			More
		</button>
	</div>
);

buildControl.propTypes = {
	label: PropTypes.string,
	added: PropTypes.func,
	disabled: PropTypes.bool,
	removed: PropTypes.func
}

export default buildControl;

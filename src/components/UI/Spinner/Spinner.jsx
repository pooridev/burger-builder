import classes from './Spinner.module.css';

const spinner = () => (
	<div className={classes.Loader}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
);
export default spinner;

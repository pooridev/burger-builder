import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css'
const controls = [
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Meat', type: 'meat' }
];

const buildControls = props => (
	<div className={classes.BuildControls}>
		{controls.map(control => (
			<BuildControl label={control.label} type={control.type} />
		))}
	</div>
);

export default buildControls;

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';
const controls = [
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Meat', type: 'meat' }
];

const buildControls = props => (
	<div className={classes.BuildControls}>
		{controls.map(control => (
			<BuildControl
				label={control.label}
				key={control.type}
				added={() => props.addedIngredient(control.type)}
				removed={() => props.removedIngredient(control.type)}
				disabled={props.disabledInfo[control.type]}
			/>
		))}
	</div>
);

export default buildControls;

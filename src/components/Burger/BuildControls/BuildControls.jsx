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
		<p>
			Current price: <strong>{props.price.toFixed(2)}</strong>
		</p>
		{controls.map(control => (
			<BuildControl
				label={control.label}
				key={control.type}
				added={() => props.addedIngredient(control.type)}
				removed={() => props.removedIngredient(control.type)}
				disabled={props.disabledInfo[control.type]}
			/>
		))}
		<button className={classes.OrderButton} disabled={props.purchasable}>
			ORDER NOW
		</button>
	</div>
);

export default buildControls;

import BuildControl from './BuildControl/BuildControl';
import PropTypes from 'prop-types';
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
		<button
			onClick={props.ordered}
			className={classes.OrderButton}
			disabled={props.purchasable}>
			ORDER NOW
		</button>
	</div>
);
buildControls.propTypes = {
	price: PropTypes.number,
	purchasable: PropTypes.bool,
	ordered: PropTypes.func,
	addedIngredient: PropTypes.func,
	removedIngredient: PropTypes.func,
	disabledInfo: PropTypes.object
};

export default buildControls;

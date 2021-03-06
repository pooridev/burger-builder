import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
	const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: 'capitalize' }}>{igKey}</span> :{' '}
				{props.ingredients[igKey]}
			</li>
		);
	});
	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with following ingredients:</p>
			<ul>{ingredientSummary}</ul>
			<p>
				
				<strong>Total Price: {props.price.toFixed(2)}</strong>
			</p>
			<p>Continue to checkout ?</p>
			<Button btnType='Danger' clicked={props.purchaseCanceled}>
				CANCEL
			</Button>
			<Button btnType='Success' clicked={props.purchaseContinued}>
				CONTINUE
			</Button>
		</Aux>
	);
};

orderSummary.propTypes = {
	ingredients: PropTypes.object,
	purchaseContinued: PropTypes.func,
	purchaseCanceled: PropTypes.func,
	price: PropTypes.number
}

export default orderSummary;

import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxiliary';

import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
	salad: 1,
	cheese: 0.7,
	bacon: 0.9,
	meat: 1.5
};
class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			meat: 0,
			cheese: 0,
			bacon: 0
		},
		totalPrice: 0
	};

	addIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;

		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = updatedCount;

		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + INGREDIENT_PRICE[type];

		this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
	};

	removeIngredientHandler = type => {};

	render() {
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ingredients={this.state.ingredients}
					addedIngredient={this.addIngredientHandler}
				/>
			</Aux>
		);
	}
}
export default BurgerBuilder;

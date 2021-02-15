import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxiliary';

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 1,
			meat: 1,
			cheese: 2,
			bacon: 1
		}
	};
	render() {
		return (
			<Aux>
				<Burger />
				<div>Build Controls</div>
			</Aux>
		);
	}
}
export default BurgerBuilder;

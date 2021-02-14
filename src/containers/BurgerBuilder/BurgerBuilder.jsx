import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxiliary';

class BurgerBuilder extends Component {
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

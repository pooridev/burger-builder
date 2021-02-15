import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';
const burger = props => {
	// props
	const { ingredients } = props;

	const transformedIngredients = Object.keys(ingredients).map(igKey => {
		return [...Array(ingredients[igKey])].map((_, index) => {
			return <BurgerIngredient key={igKey + index} type={igKey} />;
		});
	});

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type='bread-top' />
			{transformedIngredients}
			<BurgerIngredient type='bread-bottom' />
		</div>
	);
};

export default burger;

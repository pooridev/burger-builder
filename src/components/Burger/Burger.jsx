import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';
const burger = props => {
	// props
	const { ingredients } = props;

	const transformedIngredients = Object.keys(ingredients).map(igKey => {
		return [...Array(ingredients)].map((_, i) => (
			<BurgerIngredient key={igKey + 1} type={igKey} />
		));
	});

	console.log(transformedIngredients);

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type='bread-top' />
			{transformedIngredients}
			<BurgerIngredient type='bread-bottom' />
		</div>
	);
};

export default burger;

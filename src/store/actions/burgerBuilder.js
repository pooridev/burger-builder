import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addIngredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get(
        'https://burger-builder-ff829-default-rtdb.firebaseio.com/ingredients.json'
      )
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(err => dispatch(fetchIngredientsFailed()));
  };
};

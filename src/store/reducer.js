import * as actionTypes from './actions';

const initialState = {
  ingredients: {
    salad: 0,
    meat: 0,
    cheese: 0,
    bacon: 0
  },
  totalPrice: 4
};

const INGREDIENT_PRICE = {
  salad: 1,
  cheese: 0.7,
  bacon: 0.9,
  meat: 1.5
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredientName]
      };
    case actionTypes.SET_INGREDIENTS:
      console.log(action.ingredients);
      return {
        ...state,
        ingredients: action.ingredients
      };
    default:
      return state;
  }
};

export default reducer;

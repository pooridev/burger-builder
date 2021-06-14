import * as actionTypes from './actions';

const initialState = {
  ingredients: null,
  totalPrice: 4
};

const reducer = (state = initialState, action) => {
  console.log(actionTypes.ADD_INGREDIENT)
  return state;
};

export default reducer;

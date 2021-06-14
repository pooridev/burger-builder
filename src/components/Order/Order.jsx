import classes from './Order.module.css';

const order = props => (
  <div className={classes.Order}>
    <p>
      Ingredients: 
      salad ({props.ingredients.salad})
      meat ({props.ingredients.meat}) 
      bacon ({props.ingredients.bacon}) 
      cheese ({props.ingredients.cheese})
    </p>
    <p>
      Price: <strong>USD {Number(props.price).toFixed(2)}</strong>
    </p>
  </div>
);

export default order;

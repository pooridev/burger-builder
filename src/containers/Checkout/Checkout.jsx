import { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    let price = 0;
    const ingredients = {};
    for (let param of query.entries()) {
      // ['salad', '1']
      if (param[0] === 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients: ingredients, totalPrice: price });
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutContinued={this.checkoutContinuedHandler}
          checkoutCancelled={this.checkoutCancelledHandler}
          ingredients={this.state.ingredients}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          render={props => (
            <ContactData ingredients={this.state.ingredients} {...props} />
          )}
        />
      </div>
    );
  }
}

export default Checkout;

import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    let summary = <Redirect to='/' />;
    const purchasedRedirect = this.props.purchased && <Redirect to='/' />;
    /* will redirect to home page if
     * the ingredients were not availbable
     */
    if (this.props.ingredients) {
      summary = (
        <div>
          <CheckoutSummary
            checkoutContinued={this.checkoutContinuedHandler}
            checkoutCancelled={this.checkoutCancelledHandler}
            ingredients={this.props.ingredients}
          />
          <Route
            path={this.props.match.path + '/contact-data'}
            component={ContactData}
          />
          {purchasedRedirect}
        </div>
      );
    }

    return summary;
  }
}
const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  };
};

export default connect(mapStateToProps)(Checkout);

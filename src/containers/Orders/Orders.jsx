import axios from '../../axios-orders';
import { Component } from 'react';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { fetchOrders } from '../../store/actions';
import { connect } from 'react-redux';
class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    let orders = this.props.orders.map(order => (
      <Order
        key={order.id}
        price={order.price}
        ingredients={order.ingredients}
      />
    ));

    if (this.props.loading) {
      orders = <Spinner />;
    }

    return <div>{orders}</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(fetchOrders())
  };
};

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));

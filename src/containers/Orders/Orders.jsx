import axios from '../../axios-orders';
import { Component } from 'react';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get('/orders.json')
      .then(res => {
        this.setState({ loading: false });
        let fetchedOrders = [];
        for (const key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({ orders: fetchedOrders });
      })
      .catch(err => this.setState({ loading: true }));
  }
  render() {
    let orders = this.state.orders.map(order => (
      <Order
        key={order.id}
        price={order.price}
        ingredients={order.ingredients}
      />
    ));

    if (this.state.loading) {
      orders = <Spinner />;
    }

    return <div>{orders}</div>;
  }
}

export default withErrorHandler(Orders, axios);

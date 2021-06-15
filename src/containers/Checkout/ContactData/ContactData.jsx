import { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  };
  orderHandler = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'Pooria Faramarzian',
        address: {
          street: 'Test32',
          zipCode: '79898',
          country: 'Iran'
        },
        email: 'pooriafaramarzian@gmail.com'
      },
      deliveryMethod: 'fastest'
    };
    console.log(order);
    axios
      .post('/orders.json', order)
      .then(res => {
        this.setState({ loading: false, purchasing: false });
        this.props.history.push('/');
      })
      .catch(err => this.setState({ loading: false, purchasing: false }));
  };
  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type='text'
          name='name'
          placeholder='Your Name'
        />
        <input
          className={classes.Input}
          type='email'
          name='email'
          placeholder='Your Mail'
        />
        <input
          className={classes.Input}
          type='text'
          name='postalCode'
          placeholder='Postal Code'
        />
        <input
          className={classes.Input}
          type='text'
          name='street'
          placeholder='Street'
        />
        <Button clicked={this.orderHandler} btnType='Success'>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
  };
};

export default connect(mapStateToProps)(ContactData);

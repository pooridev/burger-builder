import { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import Input from './../../../components/UI/Input/Input';
import * as orderActions from '../../../store/actions/index';
import withErrorHandler from './../../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../../axios-orders';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxlength: 5
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-Mail'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' }
          ]
        },
        validation: {},
        value: 'fastest',
        valid: true
      }
    },
    loading: false,
    isFormValid: false
  };

  orderHandler = e => {
    e.preventDefault();
    const formData = {};
    for (let key in this.state.orderForm) {
      formData[key] = this.state.orderForm[key].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      contactData: formData
    };

    this.props.onOrderBuilder(order);
  };

  checkValidaty = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '';
    }

    if (rules.minLength && rules.maxlength) {
      isValid =
        value.length >= rules.minLength && value.length <= rules.maxlength;
    }
    return isValid;
  };

  inputChangedHandler = (event, id) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...updatedOrderForm[id]
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidaty(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm[id] = updatedFormElement;

    let formIsVaid = true;

    for (let key in updatedOrderForm) {
      formIsVaid = updatedOrderForm[key].valid && formIsVaid;
    }

    this.setState({ orderForm: updatedOrderForm, isFormValid: formIsVaid });
  };
  render() {
    const formElements = [];
    for (let key in this.state.orderForm) {
      formElements.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElements.map(formEl => (
          <Input
            changed={event => this.inputChangedHandler(event, formEl.id)}
            key={formEl.id}
            elementType={formEl.config.elementType}
            elementConfig={formEl.config.elementConfig}
            value={formEl.config.value}
            inValid={!formEl.config.valid}
            touched={formEl.config.touched}
            shouldValidate={formEl.config.validation}
          />
        ))}
        <Button disabled={!this.state.isFormValid} btnType='Success'>
          ORDER
        </Button>
      </form>
    );
    if (this.props.loading) {
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
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    loading: state.order.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderBuilder: orderData =>
      dispatch(orderActions.purchaseBurger(orderData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));

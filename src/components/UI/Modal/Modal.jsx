import React, { Component } from 'react';
import classes from './Modal.module.css';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
class Modal extends Component {
	shouldComponentUpdate(nextProps) {
		return (
			nextProps.show !== this.props.show ||
			nextProps.children !== this.props.children
		);
	}
	render() {
		return (
			<Aux>
				<Backdrop show={this.props.show} clicked={this.props.modalClosed} />
				<div
					className={classes.Modal}
					style={{
						transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
						opacity: this.props.show ? '1' : '0'
					}}>
					{this.props.children}
				</div>
			</Aux>
		);
	}
}

Modal.propTypes = {
	modalClosed: PropTypes.func,
	show: PropTypes.bool
};
export default Modal;

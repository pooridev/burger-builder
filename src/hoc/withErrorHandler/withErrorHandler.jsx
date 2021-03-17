import { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComp, axios) => {
	return class extends Component {
		state = {
			error: null
		};

		componentWillMount() {
			axios.interceptors.request.use(req => {
				this.setState({ error: null });
				return req;
			});

			axios.interceptors.response.use(
				res => res,
				error => this.setState({ error: error })
			);
		}

    // will close modal
		errorConfirmedHandler = () => {
			this.setState({ error: false });
		};
		render() {
			return (
				<Aux>
					<Modal modalClosed={this.errorConfirmedHandler} show={this.state.error}>
						{this.state.error && this.state.error.message}
					</Modal>
					<WrappedComp {...this.props} />
				</Aux>
			);
		}
	};
};

export default withErrorHandler;

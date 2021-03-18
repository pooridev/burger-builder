import { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComp, axios) => {
	return class extends Component {
		state = {
			error: null
		};

		componentWillMount() {
			this.reqInterceptor = axios.interceptors.request.use(req => {
				this.setState({ error: null });
				return req;
			});

			this.resInterceptor = axios.interceptors.response.use(
				res => res,
				error => this.setState({ error: error })
			);
		}

		componentWillUnmount() {
			axios.interceptors.eject(this.reqInterceptor);
			axios.interceptors.eject(this.resInterceptor);
		}

		// will close modal
		errorConfirmedHandler = () => {
			this.setState({ error: false });
		};
		render() {
			return (
				<Aux>
					<Modal
						modalClosed={this.errorConfirmedHandler}
						show={this.state.error}>
						{this.state.error && this.state.error.message}
					</Modal>
					<WrappedComp {...this.props} />
				</Aux>
			);
		}
	};
};

export default withErrorHandler;

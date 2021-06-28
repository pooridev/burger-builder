import classes from './Button.module.css';
import PropTypes from 'prop-types';

const button = ({ btnType, clicked, children, disabled }) => (
  <button
		disabled={disabled}
    className={[classes.Button, classes[btnType]].join(' ')}
    onClick={clicked}>
    {children}
  </button>
);
button.propTypes = {
  btnType: PropTypes.string,
  clicked: PropTypes.func
};
export default button;

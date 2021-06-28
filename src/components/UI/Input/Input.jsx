import classes from './Input.module.css';

const Input = props => {
  const {
    label,
    elementType,
    elementConfig,
    value,
    changed,
    inValid,
    shouldValidate,
    touched
  } = props;
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (inValid && shouldValidate && touched) {
    inputClasses.push(classes.InValid);
  }

  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          onChange={changed}
          value={value}
          className={inputClasses.join(' ')}
          {...elementConfig}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          onChange={changed}
          value={value}
          className={inputClasses.join(' ')}
          {...elementConfig}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          value={value}
          className={inputClasses.join(' ')}
          onChange={changed}>
          {elementConfig.options.map(op => (
            <option key={op.value} value={op.value}>
              {op.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          onChange={changed}
          value={value}
          className={inputClasses.join(' ')}
          {...props.elementConfig}
        />
      );
      break;
  }

  return (
    <div className={classes.Input}>
      <label>{label}</label>
      {inputElement}
    </div>
  );
};

export default Input;

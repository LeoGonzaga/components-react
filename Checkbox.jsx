import React from 'react';
import PropTypes from 'prop-types';
import { Check, Minus } from 'lucide-react';

const Checkbox = React.forwardRef(({
  className,
  checked = false,
  indeterminate = false,
  disabled = false,
  error = false,
  label,
  description,
  onChange,
  ...props
}, ref) => {
  const handleChange = (e) => {
    onChange?.(e.target.checked, e);
  };

  const checkboxId = props.id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div 
    // className={cn(
    //   'ui-checkbox-wrapper',
    //   disabled && 'ui-checkbox-wrapper--disabled',
    //   error && 'ui-checkbox-wrapper--error',
    //   className
    // )}
    >
      <div className="ui-checkbox">
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          className="ui-checkbox__input"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <div 
        // className={cn(
        //   'ui-checkbox__box',
        //   checked && 'ui-checkbox__box--checked',
        //   indeterminate && 'ui-checkbox__box--indeterminate'
        // )}
        >
          {indeterminate ? (
            <Minus size={12} className="ui-checkbox__icon" />
          ) : checked ? (
            <Check size={12} className="ui-checkbox__icon" />
          ) : null}
        </div>
      </div>
      
      {(label || description) && (
        <div className="ui-checkbox__content">
          {label && (
            <label htmlFor={checkboxId} className="ui-checkbox__label">
              {label}
            </label>
          )}
          {description && (
            <p className="ui-checkbox__description">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.string,
  description: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string
};

const Radio = React.forwardRef(({
  className,
  checked = false,
  disabled = false,
  error = false,
  label,
  description,
  value,
  name,
  onChange,
  ...props
}, ref) => {
  const handleChange = (e) => {
    onChange?.(e.target.value, e);
  };

  const radioId = props.id || `radio-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div 
    className='ui-radio-wrapper'
    // className={cn(
    //   'ui-radio-wrapper',
    //   disabled && 'ui-radio-wrapper--disabled',
    //   error && 'ui-radio-wrapper--error',
    //   className
    // )}
    
    >
      <div className="ui-radio">
        <input
          ref={ref}
          type="radio"
          id={radioId}
          className="ui-radio__input"
          checked={checked}
          disabled={disabled}
          value={value}
          name={name}
          onChange={handleChange}
          {...props}
        />
        <div 
        className='ui-radio__circle'
        // className={cn(
        //   'ui-radio__circle',
        //   checked && 'ui-radio__circle--checked'
        // )}
        >
          {checked && <div className="ui-radio__dot" />}
        </div>
      </div>
      
      {(label || description) && (
        <div className="ui-radio__content">
          {label && (
            <label htmlFor={radioId} className="ui-radio__label">
              {label}
            </label>
          )}
          {description && (
            <p className="ui-radio__description">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
});

Radio.displayName = 'Radio';

Radio.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  id: PropTypes.string
};

const RadioGroup = ({
  className,
  value,
  onChange,
  disabled = false,
  error = false,
  children,
  name,
  ...props
}) => {
  const handleChange = (selectedValue, event) => {
    onChange?.(selectedValue, event);
  };

  return (
    <div
    className= 'ui-radio-group'
      // className={
      //   cn(
      //   'ui-radio-group',
      //   disabled && 'ui-radio-group--disabled',
      //   error && 'ui-radio-group--error',
      //   className
      // )}
      role="radiogroup"
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Radio) {
          return React.cloneElement(child, {
            checked: child.props.value === value,
            onChange: handleChange,
            disabled: disabled || child.props.disabled,
            error: error || child.props.error,
            name: name || child.props.name
          });
        }
        return child;
      })}
    </div>
  );
};

RadioGroup.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired
};

export { Checkbox, Radio, RadioGroup };


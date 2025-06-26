import React from 'react';
import PropTypes from 'prop-types';

const Input = React.forwardRef(({
  className,
  type = 'text',
  disabled = false,
  error = false,
  ...props
}, ref) => {
  return (
    <input
      type={type}
      className='ui-input'
      // className={cn(
      //   'ui-input',
      //   error && 'ui-input--error',
      //   disabled && 'ui-input--disabled',
      //   className
      // )}
      ref={ref}
      disabled={disabled}
      {...props}
    />
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool
};

const Textarea = React.forwardRef(({
  className,
  disabled = false,
  error = false,
  rows = 3,
  ...props
}, ref) => {
  return (
    <textarea
    className='ui-textarea'
      // className={cn(
      //   'ui-textarea',
      //   error && 'ui-textarea--error',
      //   disabled && 'ui-textarea--disabled',
      //   className
      // )}
      ref={ref}
      disabled={disabled}
      rows={rows}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';

Textarea.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  rows: PropTypes.number
};

const Label = React.forwardRef(({
  className,
  htmlFor,
  children,
  required = false,
  ...props
}, ref) => {
  return (
    <label
      ref={ref}
      htmlFor={htmlFor}
     className='ui-label'
      {...props}
    >
      {children}
      {required && <span className="ui-label__required">*</span>}
    </label>
  );
});

Label.displayName = 'Label';

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  children: PropTypes.node.isRequired,
  required: PropTypes.bool
};

const FormField = ({
  label,
  htmlFor,
  required = false,
  error,
  helperText,
  children,
  className
}) => {
  return (
    <div
      className='ui-form-field'
     >
      {label && (
        <Label htmlFor={htmlFor} required={required}>
          {label}
        </Label>
      )}
      {children}
      {error && (
        <span className="ui-form-field__error" role="alert">
          {error}
        </span>
      )}
      {helperText && !error && (
        <span className="ui-form-field__helper">
          {helperText}
        </span>
      )}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  helperText: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export { Input, Textarea, Label, FormField };


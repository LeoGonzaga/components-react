import React from 'react';
import PropTypes from 'prop-types';

const Button = React.forwardRef(({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  disabled = false,
  children,
  ...props
}, ref) => {
  const Comp = asChild ? 'span' : 'button';
  
  const cc = `ui-button ui-button--${variant} ui-button--${size} ${disabled && 'ui-button--disabled'}`
  return (
    <Comp
      className={cc}
      ref={ref}
      disabled={disabled}
      {...props}
    >
      {children}
    </Comp>
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    'default',
    'destructive', 
    'outline',
    'secondary',
    'ghost',
    'link'
  ]),
  size: PropTypes.oneOf(['default', 'sm', 'lg', 'icon']),
  asChild: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export { Button };


import React from 'react';
import PropTypes from 'prop-types';

const Typography = React.forwardRef(({
  variant = 'p',
  className,
  children,
  ...props
}, ref) => {
  const Component = variant;
  
  return (
    <Component
      ref={ref}
      // className={cn(`ui-typography ui-typography--${variant}`, className)}
      {...props}
    >
      {children}
    </Component>
  );
});

Typography.displayName = 'Typography';

Typography.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

// Specific heading components
const H1 = React.forwardRef(({ className, children, ...props }, ref) => (
  <h1
    ref={ref}
    // className={cn('ui-heading ui-heading--1', className)}
    {...props}
  >
    {children}
  </h1>
));

H1.displayName = 'H1';

const H2 = React.forwardRef(({ className, children, ...props }, ref) => (
  <h2
    ref={ref}
    // className={cn('ui-heading ui-heading--2', className)}
    {...props}
  >
    {children}
  </h2>
));

H2.displayName = 'H2';

const H3 = React.forwardRef(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    // className={cn('ui-heading ui-heading--3', className)}
    {...props}
  >
    {children}
  </h3>
));

H3.displayName = 'H3';

const H4 = React.forwardRef(({ className, children, ...props }, ref) => (
  <h4
    ref={ref}
    // className={cn('ui-heading ui-heading--4', className)}
    {...props}
  >
    {children}
  </h4>
));

H4.displayName = 'H4';

const H5 = React.forwardRef(({ className, children, ...props }, ref) => (
  <h5
    ref={ref}
    // className={cn('ui-heading ui-heading--5', className)}
    {...props}
  >
    {children}
  </h5>
));

H5.displayName = 'H5';

const H6 = React.forwardRef(({ className, children, ...props }, ref) => (
  <h6
    ref={ref}
    // className={cn('ui-heading ui-heading--6', className)}
    {...props}
  >
    {children}
  </h6>
));

H6.displayName = 'H6';

// Text components
const Text = React.forwardRef(({ 
  size = 'base',
  weight = 'normal',
  className, 
  children, 
  as: Component = 'p',
  ...props 
}, ref) => (
  <Component
    ref={ref}
    // className={cn(
    //   'ui-text',
    //   `ui-text--${size}`,
    //   `ui-text--${weight}`,
    //   className
    // )}
    {...props}
  >
    {children}
  </Component>
));

Text.displayName = 'Text';

Text.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl']),
  weight: PropTypes.oneOf(['light', 'normal', 'medium', 'semibold', 'bold']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  as: PropTypes.elementType
};

const Caption = React.forwardRef(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    // className={cn('ui-caption', className)}
    {...props}
  >
    {children}
  </span>
));

Caption.displayName = 'Caption';

const Code = React.forwardRef(({ className, children, inline = true, ...props }, ref) => {
  const Component = inline ? 'code' : 'pre';
  
  return (
    <Component
      ref={ref}
      // className={cn(
      //   'ui-code',
      //   inline ? 'ui-code--inline' : 'ui-code--block',
      //   className
      // )}
      {...props}
    >
      {inline ? children : <code>{children}</code>}
    </Component>
  );
});

Code.displayName = 'Code';

Code.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool
};

const Lead = React.forwardRef(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    // className={cn('ui-lead', className)}
    {...props}
  >
    {children}
  </p>
));

Lead.displayName = 'Lead';

const Muted = React.forwardRef(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    // className={cn('ui-muted', className)}
    {...props}
  >
    {children}
  </p>
));

Muted.displayName = 'Muted';

export { 
  Typography, 
  H1, 
  H2, 
  H3, 
  H4, 
  H5, 
  H6, 
  Text, 
  Caption, 
  Code, 
  Lead, 
  Muted 
};


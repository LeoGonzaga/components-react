import React from 'react';
import PropTypes from 'prop-types';

const Card = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => (
  <div
    ref={ref}
    // className={cn('ui-card', className)}
    {...props}
  >
    {children}
  </div>
));

Card.displayName = 'Card';

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const CardHeader = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => (
  <div
    ref={ref}
    // className={cn('ui-card__header', className)}
    {...props}
  >
    {children}
  </div>
));

CardHeader.displayName = 'CardHeader';

CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const CardTitle = React.forwardRef(({
  className,
  children,
  as: Component = 'h3',
  ...props
}, ref) => (
  <Component
    ref={ref}
    // className={cn('ui-card__title', className)}
    {...props}
  >
    {children}
  </Component>
));

CardTitle.displayName = 'CardTitle';

CardTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  as: PropTypes.elementType
};

const CardDescription = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => (
  <p
    ref={ref}
    // className={cn('ui-card__description', className)}
    {...props}
  >
    {children}
  </p>
));

CardDescription.displayName = 'CardDescription';

CardDescription.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const CardContent = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => (
  <div
    ref={ref}
    // className={cn('ui-card__content', className)}
    {...props}
  >
    {children}
  </div>
));

CardContent.displayName = 'CardContent';

CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const CardFooter = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => (
  <div
    ref={ref}
    // className={cn('ui-card__footer', className)}
    {...props}
  >
    {children}
  </div>
));

CardFooter.displayName = 'CardFooter';

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };


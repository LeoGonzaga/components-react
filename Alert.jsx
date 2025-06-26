import React from 'react';
import PropTypes from 'prop-types';
import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from 'lucide-react';

const Alert = React.forwardRef(({
  className,
  variant = 'default',
  dismissible = false,
  onDismiss,
  children,
  ...props
}, ref) => {
  const getIcon = () => {
    switch (variant) {
      case 'success':
        return <CheckCircle size={16} />;
      case 'warning':
        return <AlertTriangle size={16} />;
      case 'error':
      case 'destructive':
        return <AlertCircle size={16} />;
      case 'info':
        return <Info size={16} />;
      default:
        return <Info size={16} />;
    }
  };

  return (
    <div
      ref={ref}
      role="alert"
      // className={cn(
      //   'ui-alert',
      //   `ui-alert--${variant}`,
      //   className
      // )}
      {...props}
    >
      <div className="ui-alert__icon">
        {getIcon()}
      </div>
      <div className="ui-alert__content">
        {children}
      </div>
      {dismissible && (
        <button
          type="button"
          className="ui-alert__dismiss"
          onClick={onDismiss}
          aria-label="Dismiss alert"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
});

Alert.displayName = 'Alert';

Alert.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'success', 'warning', 'error', 'destructive', 'info']),
  dismissible: PropTypes.bool,
  onDismiss: PropTypes.func,
  children: PropTypes.node.isRequired
};

const AlertTitle = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => (
  <h5
    ref={ref}
    // className={cn('ui-alert__title', className)}
    {...props}
  >
    {children}
  </h5>
));

AlertTitle.displayName = 'AlertTitle';

AlertTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const AlertDescription = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => (
  <div
    ref={ref}
    className="ui-alert__description"
    {...props}
  >
    {children}
  </div>
));

AlertDescription.displayName = 'AlertDescription';

AlertDescription.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export { Alert, AlertTitle, AlertDescription };


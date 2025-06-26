import React, { useState, useEffect, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { CheckCircle, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

// Toast Context
const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

// Toast Provider
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { id, ...toast };
    setToasts(prev => [...prev, newToast]);

    // Auto dismiss if duration is set
    if (toast.duration !== 0) {
      setTimeout(() => {
        removeToast(id);
      }, toast.duration || 5000);
    }

    return id;
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const removeAllToasts = () => {
    setToasts([]);
  };

  // Convenience methods
  const toast = {
    success: (message, options = {}) => addToast({ ...options, variant: 'success', title: message }),
    error: (message, options = {}) => addToast({ ...options, variant: 'error', title: message }),
    warning: (message, options = {}) => addToast({ ...options, variant: 'warning', title: message }),
    info: (message, options = {}) => addToast({ ...options, variant: 'info', title: message }),
    default: (message, options = {}) => addToast({ ...options, variant: 'default', title: message }),
    custom: (options) => addToast(options)
  };

  return (
    <ToastContext.Provider value={{ toast, removeToast, removeAllToasts }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
};

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired
};

// Toast Container
const ToastContainer = ({ toasts, onRemove }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="ui-toast-container">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          {...toast}
          onDismiss={() => onRemove(toast.id)}
        />
      ))}
    </div>
  );
};

ToastContainer.propTypes = {
  toasts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired
};

// Toast Component
const Toast = React.forwardRef(({
  className,
  variant = 'default',
  title,
  description,
  action,
  onDismiss,
  dismissible = true,
  ...props
}, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onDismiss?.();
    }, 150);
  };

  const getIcon = () => {
    switch (variant) {
      case 'success':
        return <CheckCircle size={20} />;
      case 'warning':
        return <AlertTriangle size={20} />;
      case 'error':
      case 'destructive':
        return <AlertCircle size={20} />;
      case 'info':
        return <Info size={20} />;
      default:
        return <Info size={20} />;
    }
  };

  return (
    <div
      ref={ref}
      className='ui-toast'
          {...props}
    >
      <div className="ui-toast__icon">
        {getIcon()}
      </div>
      
      <div className="ui-toast__content">
        {title && (
          <div className="ui-toast__title">
            {title}
          </div>
        )}
        {description && (
          <div className="ui-toast__description">
            {description}
          </div>
        )}
        {action && (
          <div className="ui-toast__action">
            {action}
          </div>
        )}
      </div>

      {dismissible && (
        <button
          type="button"
          className="ui-toast__dismiss"
          onClick={handleDismiss}
          aria-label="Dismiss notification"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
});

Toast.displayName = 'Toast';

Toast.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'success', 'warning', 'error', 'destructive', 'info']),
  title: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.node,
  onDismiss: PropTypes.func,
  dismissible: PropTypes.bool
};

export { Toast };


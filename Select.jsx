import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, Check, X } from 'lucide-react';

const Select = React.forwardRef(({
  className,
  placeholder = 'Select an option...',
  options = [],
  value,
  onChange,
  multiple = false,
  disabled = false,
  error = false,
  searchable = false,
  clearable = false,
  ...props
}, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const selectRef = useRef(null);
  const searchInputRef = useRef(null);

  // Filter options based on search term
  const filteredOptions = searchable
    ? options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  // Get selected option(s) for display
  const getSelectedDisplay = () => {
    if (!value) return placeholder;
    
    if (multiple) {
      if (Array.isArray(value) && value.length > 0) {
        if (value.length === 1) {
          const option = options.find(opt => opt.value === value[0]);
          return option ? option.label : '';
        }
        return `${value.length} items selected`;
      }
      return placeholder;
    } else {
      const option = options.find(opt => opt.value === value);
      return option ? option.label : placeholder;
    }
  };

  // Handle option selection
  const handleOptionSelect = (optionValue) => {
    if (multiple) {
      const currentValue = Array.isArray(value) ? value : [];
      const newValue = currentValue.includes(optionValue)
        ? currentValue.filter(v => v !== optionValue)
        : [...currentValue, optionValue];
      onChange?.(newValue);
    } else {
      onChange?.(optionValue);
      setIsOpen(false);
    }
  };

  // Handle clear
  const handleClear = (e) => {
    e.stopPropagation();
    onChange?.(multiple ? [] : null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  const hasValue = multiple ? (Array.isArray(value) && value.length > 0) : value;

  return (
    <div
      ref={selectRef}
      // className={cn(
      //   'ui-select',
      //   isOpen && 'ui-select--open',
      //   disabled && 'ui-select--disabled',
      //   error && 'ui-select--error',
      //   className
      // )}
      {...props}
    >
      <button
        ref={ref}
        type="button"
        className="ui-select__trigger"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="ui-select__value">
          {getSelectedDisplay()}
        </span>
        <div className="ui-select__actions">
          {clearable && hasValue && !disabled && (
            <button
              type="button"
              className="ui-select__clear"
              onClick={handleClear}
              aria-label="Clear selection"
            >
              <X size={16} />
            </button>
          )}
          <ChevronDown 
            size={16} 
            // className={cn(
            //   'ui-select__chevron',
            //   isOpen && 'ui-select__chevron--open'
            // )}
          />
        </div>
      </button>

      {isOpen && (
        <div className="ui-select__dropdown">
          {searchable && (
            <div className="ui-select__search">
              <input
                ref={searchInputRef}
                type="text"
                className="ui-select__search-input"
                placeholder="Search options..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          )}
          
          <ul className="ui-select__options" role="listbox">
            {filteredOptions.length === 0 ? (
              <li className="ui-select__option ui-select__option--empty">
                No options found
              </li>
            ) : (
              filteredOptions.map((option) => {
                const isSelected = multiple
                  ? Array.isArray(value) && value.includes(option.value)
                  : value === option.value;

                return (
                  <li
                    key={option.value}
                    // className={cn(
                    //   'ui-select__option',
                    //   isSelected && 'ui-select__option--selected',
                    //   option.disabled && 'ui-select__option--disabled'
                    // )}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => !option.disabled && handleOptionSelect(option.value)}
                  >
                    {multiple && (
                      <div className="ui-select__option-checkbox">
                        {isSelected && <Check size={16} />}
                      </div>
                    )}
                    <span className="ui-select__option-label">
                      {option.label}
                    </span>
                    {!multiple && isSelected && (
                      <Check size={16} className="ui-select__option-check" />
                    )}
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
});

Select.displayName = 'Select';

Select.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool
    })
  ).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ]),
  onChange: PropTypes.func,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  searchable: PropTypes.bool,
  clearable: PropTypes.bool
};

export { Select };


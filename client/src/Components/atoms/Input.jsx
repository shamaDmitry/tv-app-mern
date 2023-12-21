import classNames from 'classnames';
import { forwardRef } from 'react';

const Input = forwardRef(
  (
    {
      type = 'text',
      placeholder,
      id,
      onChange,
      onBlur,
      name,
      className = '',
      defaultValue,
      required,
      error,
    },
    ref
  ) => {
    return (
      <div className="relative flex flex-col w-full">
        <input
          id={id}
          ref={ref}
          defaultValue={defaultValue}
          name={name}
          onBlur={onBlur}
          required={required}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className={classNames(
            `block w-full px-5 py-3 text-base placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300`,
            {
              'border-red-500 focus:ring-offset-red-500 placeholder:text-red-500 bg-red-50':
                error,
            }
          )}
        />
        {error && (
          <div
            className={classNames(
              `uppercase px-2 text-xs font-medium leading-4 w-full text-left py-1 text-red-500`
            )}
          >
            {error.message}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;

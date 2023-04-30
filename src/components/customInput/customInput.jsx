import React from 'react';
import {Controller} from 'react-hook-form';
import './index.css'

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  type,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <div className='CustomInput'>
            <input
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              type={type}
            />
          </div>
          {error && (
            <p style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</p>
          )}
        </>
      )}
    />
  );
};


export default CustomInput;
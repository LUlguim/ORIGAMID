import React from 'react';

const Select = ({ options, value, setValue, ...props }) => {
  return (
    <select
      value={value}
      onChange={({ target }) => setValue(target.value)}
      {...props}
    >
      <option value="" disabled>
        Selecione
      </option>
      {options.map((option) => (
        //se tem map tu precisa de uma chave única
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;

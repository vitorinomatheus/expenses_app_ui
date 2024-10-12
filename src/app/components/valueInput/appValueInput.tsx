import React, { ChangeEvent, useState } from 'react';
import { TextField } from '@mui/material';

export default function AppValueInput() {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    
    let numericValue = input.replace(/[^\d,]/g, '');
    
    const parts = numericValue.split(',');
    if (parts.length > 2) {
      numericValue = parts[0] + ',' + parts[1];
    }
    
    if (parts.length === 2 && parts[1].length > 2) {
      numericValue = parts[0] + ',' + parts[1].slice(0, 2);
    }

    const whole = parts[0];
    const formatted = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    
    const final = parts.length === 2 ? `${formatted},${parts[1]}` : formatted;
    
    const withCurrency = final ? `R$ ${final}` : '';
    
    setValue(withCurrency);
  };

  return (
    <TextField
      value={value}
      onChange={handleChange}
      variant="filled"
      label="Valor"
      margin="normal"
      fullWidth
      inputMode="numeric" 
    />
  );
};
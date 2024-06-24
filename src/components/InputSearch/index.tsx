'use client'
import React, { ChangeEvent, useState } from 'react';
import './styles.scss'; 
import { IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

type InputSearchProps = {
  action: (formData: FormData) => void;
};

export const InputSearch: React.FC<InputSearchProps> = ({ action }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <form className="search-container" action={action}>
      <IconButton disableRipple={true} size="small" type="submit">
        <SearchIcon />
      </IconButton>
      <input
        className="search-input"
        type="text"
        placeholder="Buscar..."
        name="inputSearch"
        onChange={handleChange}
        value={searchValue}
      />
    </form>
  );
};



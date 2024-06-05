import * as S from './styles'
import {IconButton} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { ChangeEvent, useState } from 'react';

export type InputSearchPros = {
  onSubmit:(event:React.FormEvent) => void
}

export const InputSearch:React.FC<InputSearchPros> = ({onSubmit}) => {
  const [searchValue, setSearchValue] = useState('')

    return (
        <S.SearchContainer onSubmit={onSubmit}>
          <IconButton disableRipple={true} size={"small"} type='submit'>
            <SearchIcon />
          </IconButton>
          <S.SearchInput type="text" placeholder="Buscar..."  name="inputSearch" onChange={(event:ChangeEvent<HTMLInputElement>)=>setSearchValue(event.target.value)} value={searchValue}/>
        </S.SearchContainer>
      );
  };
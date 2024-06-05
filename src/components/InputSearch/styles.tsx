
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SearchContainer = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    width: 312px;
    &:focus-within{
        outline: none;
        box-shadow: 0px 0px 3px #1976d226;
    }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 5px;
  font-size: 11px;
  color: #626262;

`;

export const SearchIcon = styled(FaSearch)`
  margin-right: 12px;
  color: #0000008a!important;
  
  >path {
    color: #0000008a;
  }
`;

  

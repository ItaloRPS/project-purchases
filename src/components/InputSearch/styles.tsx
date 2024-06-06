
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SearchContainer = styled.form`
    background: #fff 0 0 no-repeat padding-box;
    border: 1px solid #cdcecf;
    border-radius: 3px;
    padding: 3px 10px;
    right: 0;
    width: 100%;
    display: flex;
    &:focus-within{
        outline: none;
        box-shadow: 0px 0px 3px #1976d226;
    }
    svg{
      font-size: 16px;
      color: #3a3737;

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

  

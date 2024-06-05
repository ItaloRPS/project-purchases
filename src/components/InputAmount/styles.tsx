
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const AmountContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    border: solid;
    border: 1px solid #d8d8d8;
    &:focus-within{
        outline: none;
        box-shadow: 0px 0px 3px #1976d226;
    }
`;

export const AmountInput = styled.input`
  width: 100%;
  
  border: none;
  outline: none;
  flex: 1;
  border-left: 1px solid #d8d8d8;
  border-right: 1px solid #d8d8d8;
  font-size: 11px;
  color: #626262;
  padding: 4px;

`;
export const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 3px 6px;

`;

import styled from 'styled-components';

export const Text = styled.span`
  display: inline-block;
  margin-right: 20px;
`;

export const Btn = styled.button`
  padding: 4px 8px;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: #ffffff;
  font-size: 18px;

  &:hover,
  &:focus {
    background-color: #3151f5;
  }
`;
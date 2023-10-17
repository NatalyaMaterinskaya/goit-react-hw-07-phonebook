import styled from 'styled-components';

export const Label = styled.label`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 24px;
`;

export const Input = styled.input`
  max-width: 200px;
  padding: 4px 8px;
  font-size: 20px;
  border-radius: 4px;

  &:focus {
    outline: none;
    border: 1px solid #34a2cd;
    box-shadow: 0px 0px 4px 4px #34a2cd;
  }
`;

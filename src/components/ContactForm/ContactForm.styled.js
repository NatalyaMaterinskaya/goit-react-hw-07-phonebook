import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 16px 16px;
  border: 2px solid #000000;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 24px;
`;

export const StyledField = styled(Field)`
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

export const StyledErrorMessage = styled(ErrorMessage)`
  color: #da7b6a;
  font-size: 18px;
`;

export const Btn = styled.button`
  max-width: 130px;
  padding: 4px 8px;
  border: 1px solid #536be4;
  border-radius: 4px;
  font-size: 18px;
  background-color: #536be4;
`;

import styled from 'styled-components';

const COLORS = {
  'form-background': '#FFFFFF',
  'input-border': '#D0CECE',
  'input-placeholder': '#E1E1E1',
  'input-button-registration-background': '#580EA2',
  'input-button-registration-text': '#FFFFFF'
};

export const RegistrationForm = styled.form`
  width: 366px;
  height: 439px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  background-color: ${COLORS['form-background']};
  border-radius: 12px;
`;

export const RegistrationFormLogo = styled.img`
  margin-bottom: 42px;
`;

export const RegistrationFormInput = styled.input`
  width: 278px;
  font-family: 'StratosSkyeng',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  border: 0;
  border-bottom: 1px ${COLORS['input-border']} solid;
  outline: none;
  
  :not(:last-child) {
    margin-bottom: 38px;
  }
  
  :last-child {
    margin-bottom: 60px;
  }
  
  ::placeholder {
    color: ${COLORS['input-placeholder']};
  }
`;

export const RegistrationFormButton = styled.button`
  width: 278px;
  height: 52px;
  font-family: 'StratosSkyeng',serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: ${COLORS['input-button-registration-text']};
  background-color: ${COLORS['input-button-registration-background']};
  border-radius: 6px;
  border: 0;
  cursor: pointer;
`;

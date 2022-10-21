import styled from 'styled-components';

const COLORS = {
  'form-background': '#FFFFFF',
  'input-border': '#D0CECE',
  'input-placeholder': '#E1E1E1',
  'input-button-login-background': '#580EA2',
  'input-button-registration-background': '#FFFFFF',
  'input-button-login-text': '#FFFFFF',
  'input-button-registration-text': '#000000',
  'button-border': '#D0CECE'
};

export const LoginForm = styled.form`
  width: 366px;
  height: 439px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  background-color: ${COLORS['form-background']};
  border-radius: 12px;
`;

export const LoginLogo = styled.img`
  margin-bottom: 42px;
`;

export const LoginInput = styled.input`
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

export const RegistrationButton = styled.button`
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
  border: 1px ${COLORS['button-border']} solid;
  border-radius: 6px;
  cursor: pointer;
  
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

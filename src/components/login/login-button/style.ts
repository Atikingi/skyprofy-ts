import styled from 'styled-components';

const COLORS = {
  'input-button-login-background': '#580EA2',
  'input-button-login-text': '#FFFFFF'
};

export const LoginButton = styled.button`
  width: 278px;
  height: 52px;
  font-family: 'StratosSkyeng',serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: ${COLORS['input-button-login-text']};
  background-color: ${COLORS['input-button-login-background']};
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ErrorMessage = styled.span`
  color: lightcoral;
  text-align: center;
  max-width: 90%;
`;

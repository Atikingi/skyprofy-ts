import styled from 'styled-components';

export const CenterBlock = styled.div`
  width: auto;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`;

export const CenterBlockContent = styled.section`
  display: flex;
  flex-direction: column;
  
  @media (max-height:1280px) {
    max-height: calc(64vh - 150px);
  }
`;

export const CenterBlockTitle = styled.h2<{isDarkTheme: boolean}>`
  --color: ${props => props.isDarkTheme ? '#FFFFFF' : '#000000'};
  margin-bottom: 45px;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  color: var(--color);
`;

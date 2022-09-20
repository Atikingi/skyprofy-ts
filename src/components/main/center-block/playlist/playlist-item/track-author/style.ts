import styled from 'styled-components';

export const TrackAuthor = styled.div`
  position: relative;
  width: 321px;
  display: flex;
  justify-content: flex-start;

  overflow: hidden;
`;

export const TrackAuthorLink = styled.a<{isDarkTheme: boolean}>`
  --color: ${props => props.isDarkTheme ? '#FFFFFF' : '#000000'};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--color);
  text-align: left;
`;

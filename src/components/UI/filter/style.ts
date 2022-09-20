import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 51px;
`;

export const FilterTitle = styled.div<{isDarkTheme: boolean}>`
  --color: ${props => props.isDarkTheme ? '#FFFFFF' : '#000000'};
  margin-right: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--color);
`;

export const FilterButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const FilterItemsWrapperAuthor = styled.div<{isActive: string | null, isDarkTheme: boolean}>`
  --bg-color: ${props => props.isDarkTheme ? '#313131' : '#FFFFFF'};
  display: ${props => props.isActive === 'author' ? 'block' : 'none'};
  position: absolute;
  z-index: 20;
  top: 50px;
  width: 248px;
  height: 305px;
  padding: 34px;
  border: 1px #313131 solid;
  background: var(--bg-color);
  border-radius: 12px;
`;

export const FilterItemsWrapperGenre = styled(FilterItemsWrapperAuthor)`
  display: ${props => props.isActive === 'genre' ? 'block' : 'none'};
`;

export const FilterItemsWrapperYear = styled.div<{isActive: string | null, isDarkTheme: boolean}>`
  --bg-color: ${props => props.isDarkTheme ? '#313131' : '#FFFFFF'};
  display: ${props => props.isActive === 'year' ? 'block' : 'none'};
  position: absolute;
  top: 50px;
  padding: 34px;
  width: 403px;
  background: var(--bg-color);
  border-radius: 12px;
  border: 1px #313131 solid;
`;

export const FilterItems = styled.div<{isDarkTheme: boolean}>`
  --scroll-color: ${props => props.isDarkTheme ? '#4B4949' : '#FFFFFF'};
  --scroll-thumb-color: ${props => props.isDarkTheme ? '#FFFFFF' : '#000000'};
  max-height: 237px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 28px;

  background: transparent;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
    height: 237px;

    background: var(--scroll-color);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    width: 4px;
    height: 65px;

    background: var(--scroll-thumb-color);
    border-radius: 10px;
  }
`;

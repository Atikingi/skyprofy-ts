import styled from 'styled-components';

const COLORS = {
  'title-dark': '#FFFFFF',
  'title-light': '#000000',
  'filter-wrapper-background': '#313131',
  scrollbar: '#4B4949',
  'scrollbar-thumb': '#FFFFFF'
};

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 51px;
`;

export const FilterTitle = styled.div<{isDarkTheme: boolean}>`
  margin-right: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.isDarkTheme ? COLORS['title-dark'] : COLORS['title-light']};
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

export const FilterItemsWrapperAuthor = styled.div<{isActive: string | null}>`
  display: ${props => props.isActive === 'author' ? 'block' : 'none'};
  position: absolute;
  z-index: 20;
  top: 50px;
  width: 248px;
  height: 305px;
  padding: 34px;
  background: ${COLORS['filter-wrapper-background']};
  border-radius: 12px;
`;

export const FilterItemsWrapperGenre = styled(FilterItemsWrapperAuthor)`
  display: ${props => props.isActive === 'genre' ? 'block' : 'none'};
`;

export const FilterItemsWrapperYear = styled.div<{isActive: string | null}>`
  display: ${props => props.isActive === 'year' ? 'block' : 'none'};
  position: absolute;
  top: 50px;
  padding: 34px;
  width: 403px;
  background: ${COLORS['filter-wrapper-background']};
  border-radius: 12px;
`;

export const FilterItems = styled.div`
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

    background: ${COLORS.scrollbar};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    width: 4px;
    height: 65px;

    background: ${COLORS['scrollbar-thumb']};
    border-radius: 10px;
  }
`;

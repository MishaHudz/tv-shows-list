import styled from 'styled-components';

export const MainTitle = styled.h1`
  color: #fff;
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 48px;
  letter-spacing: -1.92px;
  margin-bottom: 22px;
`;

export const MainTitleAccent = styled.span`
  color: #eac645;
`;

export const SearchShowSection = styled.section`
  width: 320px;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 760px;
  }

  @media (min-width: 1440px) {
    width: 1000px;
  }
`;

export const SearchShowList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 45px;

  @media (min-width: 768px) {
    justify-content: flex-start;
    column-gap: 110px;
  }

  @media (min-width: 1440px) {
    column-gap: 93px;
  }
`;

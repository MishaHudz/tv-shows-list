import styled from 'styled-components';

export const ShowSection = styled.section`
  position: relative;
  width: 320px;
  margin-left: auto;
  margin-right: auto;

  padding-top: 40px;

  @media (min-width: 768px) {
    width: 760px;
    display: flex;
  }

  @media (min-width: 1440px) {
    width: 1000px;
  }
`;

export const ShowTitle = styled.h1`
  color: #fff;
  font-size: 48px;
  letter-spacing: -1px;
  margin-bottom: 20px;
`;

export const ShowSectionRightContainer = styled.div`
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-top: 0px;
    margin-left: 30px;
  }
`;

export const SummaryParagraph = styled.p`
  color: #fff;
  font-size: 15px;
  letter-spacing: -0.5px;
  margin-top: 20px;
`;

export const InformationParagraph = styled.p`
  color: #fff;
  font-style: italic;
  font-size: 15px;
  letter-spacing: -0.5px;
`;

export const InformationLink = styled.a`
  color: #fff;
  font-style: italic;
  font-size: 15px;
  letter-spacing: -0.5px;
  transition: color 100ms linear;
  text-decoration: underline;
  &:hover,
  &:focus {
    color: #eac645;
  }
`;

export const GoBackBtn = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  padding: 2px 16px;
  border-radius: 36px;
  background: #eac645;
  transition: background 250ms linear;

  &:hover,
  &:focus {
    background: #4f2ee8;
  }

  &:hover svg,
  &:focus svg {
    fill: #eac645;
  }
`;

export const GoBackBtnIcon = styled.svg`
  fill: #4f2ee8;
  transition: fill 250ms linear;
`;

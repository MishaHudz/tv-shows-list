import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  border-radius: 0px 0px 8px 8px;
  border: 1.5px solid #fff;
  background: #111;
  padding: 10px 27px;
`;

export const Main = styled.main`
  padding-top: 30px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeaderIcon = styled.svg`
  fill: white;
  transition: fill 150ms linear, scale 150ms linear;
`;

export const HeaderLogoLink = styled(Link)`
  &:hover svg,
  &:focus svg {
    fill: #eac645;
    scale: 1.1;
  }
`;

export const HeaderLogoHomeNavigate = styled(NavLink)`
  margin-left: 40px;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  font-size: 15px;
  padding: 10px 16px;
  border-radius: 20px;
  transition: border-color 150ms linear, color 150ms linear;
  font-weight: 700;
  &:hover,
  &:focus {
    border-color: #eac645;
    color: #eac645;
  }

  &.active {
    background-color: #eac645;
    border: 0px;
    color: black;
  }
`;

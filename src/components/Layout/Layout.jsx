import { Outlet } from 'react-router-dom';
import {
  Header,
  HeaderContainer,
  HeaderIcon,
  HeaderLogoHomeNavigate,
  HeaderLogoLink,
  Main,
} from './Layout.styled';
import Sprite from '../../assets/images/sprite.svg';

function Layout() {
  return (
    <>
      <Header>
        <HeaderContainer>
          <HeaderLogoLink to="/">
            <HeaderIcon width="48px" height="48px">
              <use xlinkHref={`${Sprite}#search`} />
            </HeaderIcon>
          </HeaderLogoLink>
          <HeaderLogoHomeNavigate to="/">Home</HeaderLogoHomeNavigate>
        </HeaderContainer>
      </Header>

      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Layout;

import { NavLink, Outlet } from 'react-router-dom';
import { Header, HeaderContainer, Main } from './Layout.styled';

function Layout() {
  return (
    <>
      <Header>
        <HeaderContainer>
          <NavLink to="/"> Home Page</NavLink>
          <NavLink to="/page"> Page</NavLink>
        </HeaderContainer>
      </Header>

      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Layout;

import { useNavigate, useResolvedPath } from 'react-router-dom';
import { Container, HeaderLink, LinkContainer, Logout, Navigation, Options, Profile, Content } from './styles';
import { UserCircle, ShoppingCart } from '@phosphor-icons/react';
import { useUser } from '../../hooks/UserContext';

export function Header() {
  const navigate = useNavigate();
  const resolvedPath = useResolvedPath();
  const pathname = resolvedPath.pathname;
  const { logout, userInfo } = useUser();

  function logoutUser() {
    logout();
    navigate('/login');
  }

  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink to="/" $isActive={pathname === '/'}>
              Home
            </HeaderLink>

            <hr/>

            <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
              Cardápio
            </HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserCircle color="#fff" size={24} />
            <div>
              <p>
                Olá, <span>{userInfo?.name || 'Usuário'}</span>
              </p>
              <Logout onClick={logoutUser}>Sair</Logout>
            </div>
          </Profile>
    
          <LinkContainer to="/carrinho">
            <ShoppingCart color="#fff" size={24} />
            Carrinho
          </LinkContainer>
          
        </Options>
      </Content>
    </Container>
  );
}
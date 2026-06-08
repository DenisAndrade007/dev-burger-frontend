import { OffersCarousel, CategoriesCarousel } from '../../components';
import { Container, Banner } from './styles';
import { useUser } from '../../hooks/UserContext';

export function Home() {
  const { userInfo } = useUser();
  
  return (
    <main>
      <Banner>
        <h1>Bem-vindo, {userInfo?.name || 'Visitante'}!</h1>
      </Banner>
      <Container>
        <CategoriesCarousel />
        <OffersCarousel />
      </Container>
    </main>
  );
}
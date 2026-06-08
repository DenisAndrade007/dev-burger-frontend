import { Navigate, Outlet } from 'react-router-dom';
import { SideNaviAdmin } from '../../components';
import { Container } from './styles';

export function AdminLayout() {
    const { admin: isAdmin } = JSON.parse(
        localStorage.getItem('devburger:userData'));

    return isAdmin ? (
        <Container>
        <SideNaviAdmin />   
            <main>
                <section>
                    <Outlet />
                </section>
            </main>
        </Container>
    ) : ( 
    <Navigate to="/login" />
); 
}

import PropTypes from 'prop-types';
import { ContainerButton, CartIcon, CartInfo, CartName, CartPrice, CartQuantity } from './styles';
import Cart from '../../assets/cart.svg';

export function CartButton({ ...props }) {
  return (
    <ContainerButton {...props}>
      <CartIcon src={Cart} alt="Carrinho" />
      <CartInfo>
        <CartName>Misto-quente</CartName>
        <CartPrice>R$ 12,90</CartPrice>
      </CartInfo>
      <CartQuantity>24 x 20</CartQuantity>
    </ContainerButton>
  );
}

CartButton.propTypes = {
  onClick: PropTypes.func,
};
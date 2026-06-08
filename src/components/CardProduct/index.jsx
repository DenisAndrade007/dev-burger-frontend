import PropTypes from 'prop-types';
import { CardContainer, CardImage, ProductInfo, CartButton, ImageGroup, DecorativeImage } from './styles';
import CartIcon from '../../assets/cart.svg';
import { useCart } from '../../hooks/CartContext';

export default function CardProduct({ product }) {
  const { putProductInCart } = useCart();

  const url = product?.url;
  const decorative = product?.decorativeUrl;
  const name = product?.name;
  const price = product?.price;

  return (
    <CardContainer>
      <ImageGroup>
        {decorative && <DecorativeImage src={decorative} alt="" />}
      </ImageGroup>
      {url && <CardImage src={url} alt={name ?? 'produto'} />}
      <ProductInfo>
        <p>{name}</p>
        <strong>R$ {product.currencyValue}</strong>
        <CartButton onClick = {() => putProductInCart(product)}>
          <img src={CartIcon} alt="Carrinho" />
        </CartButton>
      </ProductInfo>
    </CardContainer>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object.isRequired,
};
import styled from 'styled-components';

export const ContainerButton = styled.button`
  background-color: (props) => props.theme.purple;
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 5px;
  font-size: 30px;
  color: #ffffff;

  &:hover {
    background: #6f357c;
    transform: scale(1.05);
  }
`;

export const CartIcon = styled.img`
  width: 24px;
  height: 20px;
  filter: brightness(0) invert(1);
`;

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

export const CartName = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
`;

export const CartPrice = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
`;

export const CartQuantity = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
`;
import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  text-align: center;
  cursor: grab;
  transition: all 0.3s ease;
  border-radius: 28.48px;
  overflow: visible;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: 60px;
  width: 100%;
  min-height: 219px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  p {
    font-size: 18px;
    color: ${(props) => props.theme.orange};
    line-height: 20px;
    font-weight: 700;
    margin-top: 40px;
  }

  strong {
    font-size: 22px;
    color: ${(props) => props.theme.black};
    font-weight: 800;
    line-height: 20px;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const CardImage = styled.img`
  width: 120px;
  height: 120px;
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  object-fit: contain;
  z-index: 2;
  cursor: grab;
  transition: all 0.2s ease;

  &:active {
    cursor: grabbing;
  }
`;

export const ProductInfo = styled.div`
  padding: 16px;
  margin-top: 70px;
  text-align: left;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductName = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  color: ${(props) => props.theme.orange};
  margin: 0 0 8px 0;
`;

export const ProductPrice = styled.strong`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => props.theme.black};
  display: block;
  margin-bottom: 0;
`;

export const CartButton = styled.button`
  background: ${(props) => props.theme.purple};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 8px 12px;
  transition: all 0.3s ease;
  text-align: center;
  width: 100%;
  margin-top: 16px;

  &:hover {
    background: ${(props) => props.theme.darkPurple};
    transform: scale(1.02);
  }

  img {
    width: 24px;
    height: 20px;
    filter: brightness(0) invert(1);
    vertical-align: middle;
  }
`;

export const ImageGroup = styled.div`
  position: absolute;
  width: 273px;
  height: 262.95px;
  top: -30px;
  left: -50px;
  opacity: 1;
  z-index: 0;
  pointer-events: none;
`;

export const DecorativeImage = styled.img`
  width: 180px;
  height: 120px;
  position: absolute;
  top: 20px;
  left: 30px;
  transform: rotate(5.31deg);
  opacity: 1;
`;
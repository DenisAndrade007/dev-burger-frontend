import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  width: 210px;
  height: 48px;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: ${(props) => props.theme.purple};
  text-transform: uppercase;
  margin: 0 auto 40px auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 57px;
    height: 4px;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: ${(props) => props.theme.purple};
    border-radius: 2px;
    opacity: 1;
  }
`;

export const CategoryCard = styled.div`
  position: relative;
  text-align: center;
  cursor: grab;
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const Controls = styled.div`
  position: absolute;
  top: 50%;
  left: -40px;
  right: -40px;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 10;
`;

export const NavButton = styled.button`
  pointer-events: auto;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 32px;
  font-weight: bold;
  top: -20px;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  &.next {
    position: relative;
    right: 65px;
  }

  &.prev {
    position: relative;
    left: 65px;
  }
`;

export const CategoryButton = styled(Link)`
  display: block;
  text-align: center;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 30px;
  border-radius: 30px;
  font-size: 22.5px;
  font-weight: 500;
  margin: 0 auto 20px auto;
  text-decoration: none;
  position: absolute;
  bottom: 8px;
  left: 30%;
  transform: translateX(-50%);
  width: auto;
  white-space: nowrap;
  z-index: 2;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`;
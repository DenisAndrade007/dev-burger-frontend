import styled from 'styled-components';

export const ContainerButton = styled.button`
  width: 100%;
  height: 52px;
  border: none;
  background-color: ${(props) => props.theme.purple};
  font-family: 'Road Rage', sans-serif;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.darkPurple};
    border: 2px dotted #fff;
  }

  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 2px;
  }
`;
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  margin-bottom: 20px;
  cursor: pointer;
  width: 90px;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  background-color: #9c9efc;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    background-color: #1e489c;
    color: white;
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 110px;
  padding: 10px 15px;
  margin-bottom: 20px;
  cursor: pointer;
  color: black;
  background-color: #9c9efc;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    background-color: #1e489c;
    color: white;
  }
  &.active {
    outline: 2px solid blue;
    background-color: #1e489c;
    color: white;
  }
`;

export const LargeCaption = styled.h1`
  margin-bottom: 20px;
`;

export const MiddleCaption = styled.h3`
  margin-bottom: 15px;
`;

export const MiniCaption = styled.h4`
  margin-bottom: 10px;
`;

export const Img = styled.img`
  border-radius: 10px;
`;
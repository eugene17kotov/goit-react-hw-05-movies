import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
font-weight: 700;
  padding: 20px;
  color: #9c9efc;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #ffffff;
  }
  &.active {
    height: 50px;
    border-radius: 10px;
    background-color: #9c9efc;
    box-shadow: inset 0px 5px 5px black;
    color: #1e489c;
  }
`;

export const StyledHeader = styled.header`
  height: 60px;
  padding: 0 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0px 5px 5px black;
  background-color: #282c34;
`;

export const StyledNav = styled.nav`  
display: flex;
  align-items: baseline;
  justify-content: center;
`;
import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { NavBarData } from '../../../mocks/data.navbar';
import { useSmallScreen } from '../../../shared/hooks';
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  text-align: center;
  background: #f8f8f8;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 99999999;
  }
`;

const StyledNavLink = styled(NavLink)`
  background: #f8f8f8;
  flex-grow: 1;
  font-size: 14px;
  padding: 5px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.palette.black };

  @media (max-width: 768px) {
    background: ${props => props.theme.palette.white};
  }

  &:hover {
    color: ${props => props.theme.palette.primary}
    background: ${props => props.theme.palette.white};
  }

  &.active {
    background: ${props => props.theme.palette.white};
    color: ${props => props.theme.palette.primary };
    font-weight: bold;
  }
`;

const NavLinkIcon = styled(Icon)`
  font-size: 28px;
  margin-bottom: 10px;
`

const CalendarHeader = () => {

  const isSmallScreen = useSmallScreen();

  const renderNavbar = (data: any, mobile: boolean) => {
    if(mobile) {
      return (
        data.map((item: any, index: number) => {
          return (
            <StyledNavLink to={item.path} exact key={index}>
              <NavLinkIcon type={item.icon} />
              { item.name }
            </StyledNavLink>
          )
        })
      );
    } else {
      return (
        data.map((item: any, index: number) => {
          return (
            <StyledNavLink to={item.path} exact  key={index} style={{ display: `${item.desktop ? '' : 'none'}` }} >
              <NavLinkIcon type={item.icon} />
              { item.name }
            </StyledNavLink>
          )
        })
      );
    }
  }

  return (
    <Nav>
      {renderNavbar(NavBarData.data, isSmallScreen)}
    </Nav>
  )
}

export default CalendarHeader;
import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { NavBarData } from '../../../mocks/data.navbar';
import { useSmallScreen } from '../../../shared/hooks';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  text-align: center;
  background: #f8f8f8;
`;

const NavLink = styled.a`
  background: #f8f8f8;
  flex-grow: 1;
  font-size: 14px;
  padding: 5px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    background: ${props => props.theme.palette.white};
  }

  &:hover {
    background: ${props => props.theme.palette.white};
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
            <NavLink href="#" key={index}>
              <NavLinkIcon type={item.icon} />
              { item.name }
            </NavLink>
          )
        })
      );
    } else {
      return (
        data.map((item: any, index: number) => {
          return (
            <NavLink href="#" key={index} style={{ display: `${item.desktop ? '' : 'none'}` }}>
              <NavLinkIcon type={item.icon} />
              { item.name }
            </NavLink>
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
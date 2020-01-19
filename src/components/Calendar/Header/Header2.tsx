import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  text-align: center;
  background: #f8f8f8;
`;

const NavLink = styled.a`
  flex-grow: 1;
  font-size: 14px;
  padding: 5px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;

  &:hover {
    background: ${props => props.theme.palette.white};
  }
`;

const NavLinkIcon = styled(Icon)`
  font-size: 28px;
  margin-bottom: 10px;
`

const CalendarHeader2 = () => {
  return (
    <Nav>
      <NavLink href="#">
        <NavLinkIcon type="calendar" />
        Tháng
      </NavLink>
      <NavLink href="#">
        <NavLinkIcon type="solution" />
        Sự Kiện
      </NavLink>
    </Nav>
  )
}

export default CalendarHeader2;
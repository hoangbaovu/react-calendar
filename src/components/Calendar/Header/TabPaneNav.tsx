import React from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';

type Props = {
  title: string,
  icon: string,
}

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  flex-grow: 1;
  text-align: center;
  // color: ${props => props.theme.palette.black};
  text-transform: uppercase;
`;

const TabPaneNav = ({ title, icon } : Props) => {
  return (
    <Nav>
      <Icon style={{ fontSize: '28px' }} type={icon} />
      { title }
    </Nav>
  )
}

export default TabPaneNav;
import React from 'react';
import { Tabs } from 'antd';
import './Header.less';
import TabPaneNav from './TabPaneNav';
import styled from 'styled-components';
import { CalendarMonthYear } from '../index';

const { TabPane } = Tabs;

const HeaderTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
`;

const CalendarHeader = () => {
  return (
    <div className="card-container">
      <HeaderTabs type="card">
        <TabPane
          tab={
            <TabPaneNav title="Tháng" icon="calendar" />
          }
          key="1"
        >
          <CalendarMonthYear />
        </TabPane>
        <TabPane
          tab={
            <TabPaneNav title="Sự Kiện" icon="solution" />
          }
          key="2"
        >
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
        </TabPane>
      </HeaderTabs>
    </div>
  )
}

export default CalendarHeader;
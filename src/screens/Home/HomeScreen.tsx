import React from 'react';
import { Layout, Row, Col } from 'antd';
import { CalendarBig, CalendarHeader2 } from '../../components/Calendar';
import { CalendarMonthYear } from '../../components/Calendar';

const HomeScreen = () => {
  return (
    <Layout>
      <Row>
        <Col span={7}>
          <CalendarBig />
        </Col>
        <Col span={17}>
          <Layout>
            {/* <CalendarHeader /> */}
            <CalendarHeader2 />
            <CalendarMonthYear />
          </Layout>
        </Col>
      </Row>
    </Layout>
  )
}

export default HomeScreen;
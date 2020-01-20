import React from 'react';
import { Layout, Row, Col } from 'antd';
import { CalendarBig, CalendarHeader } from '../../components/Calendar';
import { CalendarMonthYear } from '../../components/Calendar';

const HomeScreen = () => {
  
  return (
    <Layout>
      <Row>
        <Col lg={7}>
          <CalendarBig />
        </Col>
        <Col lg={17}>
          <Layout>
            <CalendarHeader />
            <CalendarMonthYear />
          </Layout>
        </Col>
      </Row>
    </Layout>
  )
}

export default HomeScreen;
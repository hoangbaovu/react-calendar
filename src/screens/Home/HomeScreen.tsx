import React from 'react';
import { Layout, Row, Col } from 'antd';
import { CalendarBig, CalendarHeader } from '../../components/Calendar';

const HomeScreen = () => {
  return (
    <Layout>
      <Row>
        <Col span={7}>
          <CalendarBig />
        </Col>
        <Col span={17}>
          <Layout>
            <CalendarHeader />
          </Layout>
        </Col>
      </Row>
    </Layout>
  )
}

export default HomeScreen;
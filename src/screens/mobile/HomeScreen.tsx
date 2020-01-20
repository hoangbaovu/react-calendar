import React from 'react';
import { Layout, Row, Col } from 'antd';
import { CalendarBig, CalendarHeader } from '../../components/Calendar';

const HomeScreen = () => {
  return (
    <Layout>
      <Row>
        <Col md={24}>
          <CalendarBig screen="mobile" />
          <CalendarHeader />
        </Col>
      </Row>
    </Layout>
  )
}

export default HomeScreen;
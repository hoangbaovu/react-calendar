import React from 'react';
import { Layout, Row, Col } from 'antd';
import { CalendarBig, CalendarHeader } from '../../components/Calendar';

const EventsScreen = () => {
  
  return (
    <Layout>
      <Row>
        <Col lg={7}>
          <CalendarBig />
        </Col>
        <Col lg={17}>
          <Layout>
            <CalendarHeader />
          </Layout>
        </Col>
      </Row>
    </Layout>
  )
}

export default EventsScreen;
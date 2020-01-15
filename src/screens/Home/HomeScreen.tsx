import React from 'react';
import { Layout, Row, Col } from 'antd';
import { CalendarBig } from '../../components/Calendar';
const { Header, Footer, Content } = Layout;

const HomeScreen = () => {
  return (
    <Layout>
      <Row>
        <Col span={7}>
          <CalendarBig />
        </Col>
        <Col span={17}>
          <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
          </Layout>
        </Col>
      </Row>
    </Layout>
  )
}

export default HomeScreen;
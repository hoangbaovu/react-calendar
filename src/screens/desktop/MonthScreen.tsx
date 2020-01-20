import React from 'react';
import { Layout, Row, Col } from 'antd';
import { CalendarBig, CalendarHeader } from '../../components/Calendar';
import { CalendarMonthYear, CalendarMonthYearMobile } from '../../components/Calendar';
import { useSmallScreen } from '../../shared/hooks'

const MonthScreen = () => {

  const isSmallScreen = useSmallScreen();

  const renderMonthScreen = (mobile: boolean) => {
    if (mobile) {
      return (
        <>
          <Col md={24}>
            <Layout>
              <CalendarHeader />
              <CalendarMonthYearMobile />
            </Layout>
          </Col>
        </>
      )
    } else {
      return (
        <>
          <Col lg={7}>
            <CalendarBig />
          </Col>
          <Col lg={17}>
            <Layout>
              <CalendarHeader />
              <CalendarMonthYear />
            </Layout>
          </Col>
        </>
      )
    }
  }

  return (
    <Layout>
      <Row>
        {renderMonthScreen(isSmallScreen)}
      </Row>
    </Layout>
  )
}

export default MonthScreen;
import React from 'react';
import { Calendar } from 'antd';
import moment from 'moment';
import 'moment/locale/vi';
import './CalendarMonthYearMobile.less';
import { 
  MOMENT_MONTHS_FULL,
  MOMENT_WEEKDAYSMIN_SHORT,
} from '../../../constants';

const CalendarMonthYearMobile = () => {
  const months = MOMENT_MONTHS_FULL.split('_');
  moment.updateLocale('vi', {
    weekdaysMin: MOMENT_WEEKDAYSMIN_SHORT.split('_'),
    months,
    monthsShort: months,
  });
  return (
    <Calendar fullscreen={false} />
  )
}

export default CalendarMonthYearMobile;
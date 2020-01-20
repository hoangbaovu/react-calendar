import React from 'react';
import { Calendar, Badge } from 'antd';
import moment from 'moment';
import 'moment/locale/vi';
import './CalendarMonthYearMobile.less';


const getListData = (value: any) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
      ];
      break;
    default:
  }
  return listData || [];
}

const dateCellRender = (value: any) => {
  const listData = getListData(value);
  return (
    <ul style={{ listStyle: 'none', padding: '5px'}}>
      {listData.map(item => (
        <li key={item.content}>
          <Badge status="default" text={item.content} />
        </li>
      ))}
    </ul>
  );
}

const getMonthData = (value: any) => {
  if (value.month() === 8) {
    return 1394;
  }
}

const monthCellRender = (value: any) => {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

const CalendarMonthYearMobile = () => {
  const months = 'Tháng 1_Tháng 2_Tháng 3_Tháng 4_Tháng 5_Tháng 6_Tháng 7_Tháng 8_Tháng 9_Tháng 10_Tháng 11_Tháng 12'.split('_');
  moment.updateLocale('vi', {
    weekdaysMin: 'CN_Hai_Ba_Tư_Năm_Sáu_Bảy'.split('_'),
    months,
    monthsShort: months,
  });
  return (
    <Calendar fullscreen={false} />
  )
}

export default CalendarMonthYearMobile;
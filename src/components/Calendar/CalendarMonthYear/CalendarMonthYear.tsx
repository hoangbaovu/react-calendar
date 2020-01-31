import React, { useState } from 'react';
import { Calendar, Badge } from 'antd';
import './CalendarMonthYear.less';
import moment from 'moment';
import 'moment/locale/vi';
import { 
  MOMENT_MONTHS_FULL,
  MOMENT_WEEKDAYSMIN_FULL,
} from '../../../constants';
import { useDispatch  } from "react-redux";

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

const CalendarMonthYear = () => {
  const [date, setDate ] = useState(moment());
  // eslint-disable-next-line
  const [dateSelected, setDateSelected] = useState(moment());
  const months = MOMENT_MONTHS_FULL.split('_');
  moment.updateLocale('vi', {
    weekdaysMin: MOMENT_WEEKDAYSMIN_FULL.split('_'),
    months,
    monthsShort: months,
  });

  const dispatch = useDispatch();

  const onSelect = (value: any) => {
    setDate(value);
    setDateSelected(value);
    dispatch({
      type: "SELECTED_DATE",
      dateSelected: value
    })
  };

  const onPanelChange = (value: any) => {
    setDate(value);
  };

  return (
    <Calendar
      value={date}
      onSelect={onSelect}
      dateCellRender={dateCellRender}
      monthCellRender={monthCellRender}
      onPanelChange={onPanelChange}
    />
  )
}

export default CalendarMonthYear;
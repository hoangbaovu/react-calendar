import { combineReducers } from 'redux';
import counterRecuders from './counter';
import calendarRecuders from './calendar';

const reducers = combineReducers({
  counter: counterRecuders,
  calendar: calendarRecuders,
});

export default reducers;
import { combineReducers } from 'redux';
import counterRecuders from './counter';

const reducers = combineReducers({
  counter: counterRecuders,
});

export default reducers;
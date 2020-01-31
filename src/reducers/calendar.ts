import moment from 'moment';

const initialState = {
  date: moment(),
  dateSelected: moment(),
};

const calendarRecuders = (state = initialState, action: any) => {
  switch (action.type) {
    case "SELECTED_DATE":
      return {
        ...state,
        dateSelected: action.dateSelected, 
      };
    default:
      return state;
  }
}

export default calendarRecuders;
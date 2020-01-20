// import loadable from '@loadable/component';

// const MonthScreen = loadable(() => import('./screens/desktop/MonthScreen'));
// const EventsScreen = loadable(() => import('./screens/desktop/EventScreen'));

import MonthScreen from './screens/desktop/MonthScreen';
import EventScreen from './screens/desktop/EventScreen';

export default [
  {
    path: '/month',
    component: MonthScreen,
  },
  {
    path: '/events',
    component: EventScreen,
  },
]

import React from 'react';
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import createTheme from './theme/index';
import GlobalStyle from './theme/globalStyle';
import HomeScreenDesktop from './screens/desktop/HomeScreen';
import HomeScreenMobile from './screens/mobile/HomeScreen';
import App from './App';
import { useSmallScreen } from './shared/hooks';
import { useSelector, useDispatch  } from "react-redux";
import { Counter } from './types/counter.types';

const Main: React.FC = () => {  
  const isSmallScreen = useSmallScreen();
  const counter = useSelector((state: Counter) => state.counter.num);
  const dispatch = useDispatch();

  console.log(counter);
  return (
    <>
      <GlobalStyle />
      {counter}
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
            step: 1
          })
        }
      >
        Increment
      </button>
      <ThemeProvider theme={createTheme}>
        <Switch>
          {
            isSmallScreen ? (
              <Route path="/" exact component={HomeScreenMobile} />
            ) : (
              <Route path="/" exact component={HomeScreenDesktop} />
            )
          }
          <Route path="/*" component={App} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default Main;
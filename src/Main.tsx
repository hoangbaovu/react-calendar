import React from 'react';
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import createTheme from './theme/index';
import GlobalStyle from './theme/globalStyle';
import HomeScreenDesktop from './screens/desktop/HomeScreen';
import HomeScreenMobile from './screens/mobile/HomeScreen';
import App from './App';
import { useSmallScreen } from './shared/hooks';

const Main: React.FC = () => {  
  const isSmallScreen = useSmallScreen();

  return (
    <>
      <GlobalStyle />
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
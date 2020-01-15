import React from 'react';
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import createTheme from './theme/index';
import GlobalStyle from './theme/globalStyle';
import HomeScreen from './screens/Home/HomeScreen';
import App from './App';

const Main: React.FC = () => {  

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={createTheme}>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/*" component={App} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default Main;
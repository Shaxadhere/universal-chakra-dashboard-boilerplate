import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import AppRouter from './config/routes';
import "@fontsource/lato";
import './index.css';
import appColors from './config/constants/appColors';

const root = ReactDOM.createRoot(document.getElementById('root'));

const colors = {
  primaryText: appColors.dark,
  secondaryText: appColors.secondaryText,
  headingText: appColors.dark,
  primaryFill: appColors.primary,
  secondaryFill: appColors.secondary,
  danger: appColors.danger,
  success: appColors.success,
  warning: appColors.warning,
  info: appColors.primary,
};

const fonts = {
  heading: `'Lato', sans-serif`,
  body: `'Lato', sans-serif`,
}

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ colors, fonts, config });


root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AppRouter />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

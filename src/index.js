import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import AppRouter from './config/routes';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const colors = {
  primaryText: "#3C3C3D",
  secondaryText: "#9D9DA0",
  headingText: "#383839",
  primaryFill: "#166ceb",
  secondaryFill: "#f3f4fa",
  danger: "#ae0000",
  success: "green",
  warning: "yellow",
  info: "blue",
};

const fonts = {
  heading: `'Montserrat', sans-serif`,
  body: `'Montserrat', sans-serif`,
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

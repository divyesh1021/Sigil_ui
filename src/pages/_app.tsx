// import '@/styles/globals.css';

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from '../reducer/index';

// import type { AppProps } from 'next/app';
// import { ThemeProvider } from "next-themes";


// const store = createStore(rootReducer);

import { store } from "../redux/app/store";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}
import '../styles/globals.scss'
import React, {useState, useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { createWrapper } from 'next-redux-wrapper';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './../redux/store';

function MyApp({ Component, pageProps }) {

  return (
    <React.Fragment>
      <Head>
        <title>Bexels</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        /> 
        <meta property="og:image" content="../public/images/preview.png" />
      </Head>
      
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
      
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};



const makeStore = () => store;
const wrapper = createWrapper(makeStore);
//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp);
// export default withRedux(makeStore)(MyApp);


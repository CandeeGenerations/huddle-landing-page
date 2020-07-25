/** @jsx jsx */
import {jsx, Global} from '@emotion/core'
import React from 'react'

import Cta from './components/Cta'
import About from './components/About'
import Header from './components/Header'
import Footer from './components/Footer'

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Global
        styles={{
          html: {
            margin: 0,
            padding: 0,
          },

          body: {
            margin: 0,
            padding: 0,
            fontSize: 18,
            fontFamily: 'Open Sans',
          },

          'h1, h2, h3, h4, h5': {
            fontFamily: 'Poppins',
          },

          '.container': {
            width: '90%',
            margin: '0 auto',

            '@media only screen and (min-width: 540px)': {
              width: '80%',
            },

            '@media only screen and (min-width: 960px)': {
              width: '75%',
              maxWidth: 1440,
            },
          },

          '.right': {
            textAlign: 'right',
          },

          '.center': {
            textAlign: 'center',
            margin: '0 auto',
          },
        }}
      />

      <Header />

      <About />

      <Cta />

      <Footer />
    </React.Fragment>
  )
}

export default App

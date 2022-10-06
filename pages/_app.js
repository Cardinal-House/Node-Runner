import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material';

import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Nunito Sans',
        'sans-serif',
        'Segoe UI', 
        'Roboto', 
        'Oxygen',
        'Ubuntu', 
        'Cantarell', 
        'Fira Sans', 
        'Droid Sans', 
        'Helvetica Neue'
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Node Runner</title>
        <meta name="description" content="Node Runner by Cardinal House Crypto" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Kanit&family=Merriweather+Sans:wght@500&family=Nunito+Sans:wght@600;800&family=Prompt&family=Source+Serif+Pro:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <div className="mainBackground">
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default MyApp

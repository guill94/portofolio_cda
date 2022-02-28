import Head from "next/head";
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Script from "next/script";



function MyApp({ Component, pageProps }) {

  return (
    <> 
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></Script>
      <Script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></Script>
    </>
  )
}

export default MyApp
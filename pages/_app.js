import '../styles/globals.css'
import Navigation from '../components/Navigation'

function MyApp({ Component, pageProps }) {
  return <>
    <Navigation />
    
    <div className="container">
      <Component {...pageProps} />
    </div>
  </>
}

export default MyApp

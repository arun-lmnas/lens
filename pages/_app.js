import '../styles/globals.css'
import Layout from '../components/layout'
import Container from 'components/container'

function MyApp({ Component, pageProps}) {
  return(
    <Layout>
        <Component  {...pageProps} />
    </Layout>
  )
}

export default MyApp

import Nav from './nav'
import Footer from './footer'
import styles from './layout.module.css'
import Head from 'next/head'
export default function Layout({ children }) {
    return (
        <> 
            <Head>
                <title>LENS Docs</title>
            </Head>
            <Nav />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    )
}
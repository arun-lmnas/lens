import Nav from './nav'
import Footer from './footer'
import Head from 'next/head'
import Sidebar from './sidebar'
export default function LayoutDocs({ children, routes }) {
    return (
        <>
            <Head>
                <title>LENS Docs</title>
            </Head>
            <section className="text-gray-600 body-font">
                <Nav />
                <div className="container px-5 py-0 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap w-full">
                        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="flex-grow pl-4">
                                    <Sidebar routes={routes} />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"  >
                            <main>{children}</main>   
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
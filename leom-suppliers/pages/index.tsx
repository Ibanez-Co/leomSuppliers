import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Headline from '@/components/Headline';
import Footer from '@/components/Footer';
import ProductPanel from '@/components/ProductPanel';
import About from '@/components/About';
import OurClients from '@/components/OurClients';

export default function Home() {
  return (
    <>
      <Head>
        <title>LEOM Sourcing</title>
        <meta name="description" content="Generated by IbanezCo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main>

        <div className='flex w-full'>
          <NavBar />
        </div>
        <Headline/>

        <ProductPanel/>
        <About/>
        <OurClients/>
        
      </main>
      <Footer/>
    </>
  )
}

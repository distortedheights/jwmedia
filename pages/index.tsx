import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fotografen Portfolio | JW Media</title>
        <meta name="description" content="Professionelle Fotografie - Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

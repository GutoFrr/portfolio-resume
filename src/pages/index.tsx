import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Navbar from '../components/navbar'
import MainContent from '../components/main-content'
import Footer from '../components/footer'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>JVM</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <MainContent />
      <Footer />
    </Container>
  )
}

export default Home

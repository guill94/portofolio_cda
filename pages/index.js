import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import img1 from '../public/images/img1.jpg';
import Nav from '../components/nav'
import { useEffect } from 'react';
import Card from '../components/card';

export default function Home() {
  useEffect(() => {
  const titre = document.querySelector('.bgIndex h1');
  const info = document.querySelectorAll('.bgIndex p');
  const bas = document.querySelector('footer');


  window.addEventListener('load', () => {

      const TL = gsap.timeline({paused: true});

      TL
      .staggerFrom(titre, 2.5, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
      .staggerFrom(info, 2.5, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
      .from(bas, 2, {transform: "scale(0)", ease: "power2.out"},0.3, '-=2')

      TL.play();
  })
  }, [])
  


  return (
    <div className={styles.container}>

      <Head>
        <title> 🖥 Guillaume BURGNIES</title>
        <meta name="description" content="Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>
      <div className="bgIndex">
          
            <h1><span>Bien</span><span>venue</span></h1>
            <p className="infoIndex">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cntore! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi ullam labore facere</p>
            <p className="infoIndex">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cntore! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi ullam labore facere</p>
            <p className="infoIndex">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cntore! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi ullam labore facere</p>
        </div>

        <div className='container mt-5'>
          <div id='projects'></div>
          <div className="row mt-3">

            <div className="col-xl-4">
              <Card img={img1} title='title' text='text' link='#' button='Gogo'/>
            </div>

            <div className="col-xl-4">
              <Card img={img1} title='title' text='text' link='#' button='Gogo'/>
            </div>

            <div className="col-xl-4">
              <Card img={img1} title='title' text='text' link='#' button='Gogo'/>
            </div>
          </div>

          <div className="row mt-5">

            <div className="col-xl-4">
              <Card img={img1} title='title' text='text' link='#' button='Gogo'/>
            </div>

            <div className="col-xl-4">
              <Card img={img1} title='title' text='text' link='#' button='Gogo'/>
            </div>

            <div className="col-xl-4">
              <Card img={img1} title='title' text='text' link='#' button='Gogo'/>
            </div>
          </div>
          
        </div>
    </div>
  )
}
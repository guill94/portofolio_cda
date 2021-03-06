import React from 'react';
import Nav from './nav';
import Footer from './footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import github from '../public/images/github-brands.svg';
import { useTranslation } from 'next-i18next';

const Projects = (props) => {

    const { t } = useTranslation();


  return (
    <div>
        <Nav/>

            <div>
                <h1 className='text-center mt-4 mb-5'>{props.title}</h1>
            </div>

            <div className="main-carousel">

                <section id="slider">

                    <input type="radio" name="slider" id="s1" defaultChecked/>
                    <input type="radio" name="slider" id="s2" />
                    <input type="radio" name="slider" id="s3" />
                    <input type="radio" name="slider" id="s4" />

                    <label htmlFor="s1" id="slide1">
                            <Image src={props.img1} layout="fill" alt="image site"/>
                            
                    </label>
                    <label htmlFor="s2" id="slide2">
                            <Image src={props.img2} layout="fill" alt="image site"/>
                            
                    </label>
                    <label htmlFor="s3" id="slide3">
                            <Image src={props.img3} layout="fill" alt="image site"/>
                            
                    </label>
                    <label htmlFor="s4" id="slide4">
                            <Image src={props.img4} layout="fill" alt="image site"/>
                            
                    </label>
                
                </section>
                
            </div>


            <section className='mt-5 mb-3 container'>
                <h3 className='mb-3'>Description :</h3>
                <p>{props.main}</p><br/>
            </section>

            <section className='mt-3 mb-3 container'>
                <h3 className='mb-3'>Technologies :</h3>
                <p>{props.tech}</p><br/>
            </section>

            <section className='text-center'>
                {props.children}
            </section>

            <section className='text-center mt-5'>
                <Link href="/#projects"><a className='custom-button'>{t ('retour', {ns: 'homepage'})}</a></Link>
            </section>

        <Footer/>
    </div>
  )
}

export default Projects

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ukflag from '../public/images/ukflag.PNG';
import frflag from '../public/images/frflag.PNG';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';



const Nav = () => {

    const Router = useRouter();
    const { t } = useTranslation();

  return (
 
    <nav className="navbar navbar-expand-xl navbar-light bg-dark">
        <div className="container-fluid">
            <Link href="#"><a className="navbar-brand ms-4">Guillaume Burgnies</a></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="line"></span> 
                <span className="line"></span> 
                <span className="line"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto me-1">
                    <li className="nav-item">
                        <Link href="/#home"><a className="nav-link active" aria-current="page">{t ('accueil', {ns: 'nav'})}</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/#projects"><a className="nav-link">{t ('projets', {ns: 'nav'})}</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/#about"><a className="nav-link">{t ('a-propos', {ns: 'nav'})}</a></Link>
                    </li>
                    <li className="nav-item me-4">
                        <Link href="/#contact"><a className="nav-link">Contact</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href={Router.pathname} locale='fr'><a className="nav-link"><Image src={frflag} alt="FR"/></a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href={Router.pathname} locale='en'><a className="nav-link"><Image src={ukflag} alt="EN"/></a></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  )
}

export default Nav;
import React from 'react';
import Nav from '../components/Nav';
import './container.css';
import CalendlyWidget from '../components/CalendlyWidget';
import Footer from '../components/Footer';
import CardObtencion from './CardObtencion';
import Header from './../components/Header'
import Button from './../components/Button'

export default function VslPart1() {
  return (
    <div className='containerVsl1'>
      <Nav />
      <div className='content'>
        <Header />
        <div className='button'>
        <Button />
        </div>
        <CardObtencion />
        <CalendlyWidget />
      </div>
      <Footer />
    </div>
  );
}


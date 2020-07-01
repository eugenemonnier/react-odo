import React from 'react'
import './App.css'
import Header from '../Header'
import Odometer from '../Odometer'
import Footer from '../Footer'

export default function App () {
  return (
    <main>
      <div className='App'>
        <Header text="Eugene's" />
        <Odometer />
        <Footer trademark='Odo React™' />
      </div>
    </main>
  )
}

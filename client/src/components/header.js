import React from 'react'
import {Jumbotron} from 'reactstrap'
import './header.css'
const header = () => {
  return (
    <Jumbotron className='jumbo'>
      <h1 className='text-center'>Currency Converter</h1>
      <h3 className='text-center'>Pick and convert from over 140 currencies!</h3>
    </Jumbotron>
  )
}

export default header

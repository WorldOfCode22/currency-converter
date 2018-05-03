import React from 'react'
import { ConversionFormContext } from '../App'

const ConversionForm = () => {
  return (
    <ConversionFormContext.Consumer>
      {value => (
        <h1>{}</h1>
      )}
    </ConversionFormContext.Consumer>
  )
}

export default ConversionForm

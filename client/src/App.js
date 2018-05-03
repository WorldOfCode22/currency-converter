import React, { Component } from 'react'
import ConversionForm from './components/conversion-form'

import './App.css'

const ConversionFormContext = React.createContext({})

const conversionForm = {}

class App extends Component {
  constructor () {
    super()
    this.state = { conversionForm }
  }

  render () {
    return (
      <ConversionFormContext.Provider value={this.state.conversionForm}>
        <ConversionForm />
      </ConversionFormContext.Provider>
    )
  }
}

export default App
export {ConversionFormContext}

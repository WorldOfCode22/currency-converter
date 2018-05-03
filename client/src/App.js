import React, { Component } from 'react'
import {Container} from 'reactstrap'
import ConversionForm from './components/conversion-form'

import './App.css'

const ConversionFormContext = React.createContext({})

class App extends Component {
  constructor (props) {
    super(props)
    const conversionForm = {
      fromCurrencyCode: 'USD',
      changeFromCurrencyCode: this.changeFromCurrencyCode.bind(this),
      fromCurrencyDropdownOpen: false,
      fromCurrencyDropdownToggle: this.toggleFromCurrencyDropdown.bind(this),
      toCurrencyCode: 'FKP',
      changeToCurrencyCode: this.changeToCurrencyCode.bind(this),
      toCurrencyDropdownOpen: false,
      toCurrencyDropdownToggle: this.toggleToCurrencyDropdown.bind(this)
    }
    this.state = { conversionForm }
  }

  changeFromCurrencyCode (name) {
    const {conversionForm} = this.state
    conversionForm.fromCurrencyCode = name
    this.setState({conversionForm})
  }

  changeToCurrencyCode (name) {
    const {conversionForm} = this.state
    conversionForm.toCurrencyCode = name
    this.setState({conversionForm})
  }

  toggleToCurrencyDropdown () {
    const {conversionForm} = this.state
    conversionForm.toCurrencyDropdownOpen = !conversionForm.toCurrencyDropdownOpen
    this.setState({conversionForm})
  }
  toggleFromCurrencyDropdown () {
    const {conversionForm} = this.state
    conversionForm.fromCurrencyDropdownOpen = !conversionForm.fromCurrencyDropdownOpen
    this.setState({conversionForm})
  }
  render () {
    return (
      <ConversionFormContext.Provider value={this.state.conversionForm}>
        <Container>
          <ConversionForm />
        </Container>
      </ConversionFormContext.Provider>
    )
  }
}

export default App
export {ConversionFormContext}

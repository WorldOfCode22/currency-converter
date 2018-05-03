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
      fromCountryValue: '',
      fromCountryOnChange: this.fromCountryOnChange.bind(this),
      toCurrencyCode: 'FKP',
      changeToCurrencyCode: this.changeToCurrencyCode.bind(this),
      toCurrencyDropdownOpen: false,
      toCurrencyDropdownToggle: this.toggleToCurrencyDropdown.bind(this),
      exchange: this.convertCurrency.bind(this),
      requestLoading: false,
      exchangeRate: null
    }
    this.state = { conversionForm }
  }

  fromCountryOnChange (event) {
    const {conversionForm} = this.state
    conversionForm.fromCountryValue = event.target.value
    this.setState({conversionForm})
  }
  convertCurrency () {
    const {conversionForm} = this.state
    conversionForm.requestLoading = true
    this.setState({conversionForm})
    let query = `{
      CurrencyExchange(fromCountry: "${conversionForm.fromCurrencyCode}", toCountry: "${conversionForm.toCurrencyCode}" ) {
        exchangeRate
      }
    }`

    if (window.fetch) {
      window.fetch('http://localhost:80/graphql', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({query: query})
      })
        .then(
          (response) => { return response.json() },
          err => { console.log(err) }
        )
        .then(
          (data) => {
            conversionForm.requestLoading = false
            conversionForm.exchangeRate = data.data.exchangeRate
            this.setState({conversionForm})
          },
          err => { console.log(err) }
        )
    }
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

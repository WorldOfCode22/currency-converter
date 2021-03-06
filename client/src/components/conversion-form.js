import React from 'react'
import { ConversionFormContext } from '../App'
import { Row, Col, Button, InputGroup, InputGroupButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu, Input } from 'reactstrap'
import currencyCodes from '../currency'

const getFromCurrencyDropdownCodes = (conversion) => {
  let jsxCurrencyCodes = []
  for (let i = 0; i < currencyCodes.length; i++) {
    jsxCurrencyCodes.push(<DropdownItem key={i} onClick={() => { conversion.changeFromCurrencyCode(currencyCodes[i]['currency code'], currencyCodes[i]['currency name']) }}>{currencyCodes[i]['currency code']}</DropdownItem>)
  }
  return jsxCurrencyCodes
}

const getToCurrencyDropdownCodes = (conversion) => {
  let jsxCurrencyCodes = []
  for (let i = 0; i < currencyCodes.length; i++) {
    jsxCurrencyCodes.push(<DropdownItem key={i} onClick={() => { conversion.changeToCurrencyCode(currencyCodes[i]['currency code'], currencyCodes[i]['currency name']) }}>{currencyCodes[i]['currency code']}</DropdownItem>)
  }
  return jsxCurrencyCodes
}

const LoadOrForm = (props) => {
  const {conversion} = props
  if (conversion.requestLoading) {
    return (
      <h5 className='text-center'>Please wait request loading</h5>
    )
  }
  return (
    <Form conversion={conversion} />
  )
}
const Form = (props) => {
  const {conversion} = props
  return (
    <div>
      <h5>{conversion.fromCurrencyName}</h5>
      <InputGroup>
        <InputGroupButtonDropdown color='info' isOpen={conversion.fromCurrencyDropdownOpen} toggle={conversion.fromCurrencyDropdownToggle} addonType='append'>
          <DropdownToggle caret>
            {conversion.fromCurrencyCode}
          </DropdownToggle>
          <DropdownMenu>
            {getFromCurrencyDropdownCodes(conversion)}
          </DropdownMenu>
        </InputGroupButtonDropdown>
        <Input value={conversion.fromCountryValue} onChange={(event) => { conversion.fromCountryOnChange(event) }} />
      </InputGroup>
      <br />
      <h5>{conversion.toCurrencyName}</h5>
      <InputGroup>
        <InputGroupButtonDropdown color='info' isOpen={conversion.toCurrencyDropdownOpen} toggle={conversion.toCurrencyDropdownToggle} addonType='append'>
          <DropdownToggle caret>
            {conversion.toCurrencyCode}
          </DropdownToggle>
          <DropdownMenu>
            {getToCurrencyDropdownCodes(conversion)}
          </DropdownMenu>
        </InputGroupButtonDropdown>
        <Input readOnly='true' value={conversion.result} />
      </InputGroup>
      <h5>Exchange Rate: {conversion.exchangeRate}</h5>
      <br />
      <Button color='success' onClick={() => { conversion.exchange() }}>Exchange!</Button>
    </div>
  )
}

const ConversionForm = () => {
  return (
    <ConversionFormContext.Consumer>
      {conversion => (
        <Row>
          <Col />
          <Col>
            <LoadOrForm conversion={conversion}/>
          </Col>
          <Col />
        </Row>
      )}
    </ConversionFormContext.Consumer>
  )
}

export default ConversionForm

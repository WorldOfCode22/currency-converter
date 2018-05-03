import React from 'react'
import { ConversionFormContext } from '../App'
import { Row, Col, Button, InputGroup, InputGroupButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu, Input } from 'reactstrap'
import currencyCodes from '../currency'

const getFromCurrencyDropdownCodes = (conversion) => {
  let jsxCurrencyCodes = []
  for (let i = 0; i < currencyCodes.length; i++) {
    jsxCurrencyCodes.push(<DropdownItem key={i} onClick={() => { conversion.changeFromCurrencyCode(currencyCodes[i]['currency code']) }}>{currencyCodes[i]['currency code']}</DropdownItem>)
  }
  return jsxCurrencyCodes
}

const getToCurrencyDropdownCodes = (conversion) => {
  let jsxCurrencyCodes = []
  for (let i = 0; i < currencyCodes.length; i++) {
    jsxCurrencyCodes.push(<DropdownItem key={i} onClick={() => { conversion.changeToCurrencyCode(currencyCodes[i]['currency code']) }}>{currencyCodes[i]['currency code']}</DropdownItem>)
  }
  return jsxCurrencyCodes
}

const Form = (props) => {
  const {conversion} = props
  return (
    <div>
      <InputGroup>
        <InputGroupButtonDropdown color='info' isOpen={conversion.fromCurrencyDropdownOpen} toggle={conversion.fromCurrencyDropdownToggle} addonType='append'>
          <DropdownToggle caret>
            {conversion.fromCurrencyCode}
          </DropdownToggle>
          <DropdownMenu>
            {getFromCurrencyDropdownCodes(conversion)}
          </DropdownMenu>
        </InputGroupButtonDropdown>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupButtonDropdown color='info' isOpen={conversion.toCurrencyDropdownOpen} toggle={conversion.toCurrencyDropdownToggle} addonType='append'>
          <DropdownToggle caret>
            {conversion.toCurrencyCode}
          </DropdownToggle>
          <DropdownMenu>
            {getToCurrencyDropdownCodes(conversion)}
          </DropdownMenu>
        </InputGroupButtonDropdown>
        <Input readOnly='true' />
      </InputGroup>
      <br />
      <Button color='success'>Convert!</Button>
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
            <Form conversion={conversion} />
          </Col>
          <Col />
        </Row>
      )}
    </ConversionFormContext.Consumer>
  )
}

export default ConversionForm

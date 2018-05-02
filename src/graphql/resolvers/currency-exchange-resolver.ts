import fetch from 'node-fetch'
import ICurrencyExchange from '../../interfaces/currency-exchange-interface';
export default async function (parentVal: any, args: any) {
  const apiUrl = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${args.fromCountry}&to_currency=${args.toCountry}&apikey=${process.env.APIKEY}`
  let response = await fetch(apiUrl)
  let data = await response.json()
  if (data['Realtime Currency Exchange Rate']) {
    let fromCurrencyCode = data['Realtime Currency Exchange Rate']['1. From_Currency Code']
    let fromCurrencyName = data['Realtime Currency Exchange Rate']['2. From_Currency Name']
    let toCurrencyCode = data['Realtime Currency Exchange Rate']['3. To_Currency Code']
    let toCurrencyName = data['Realtime Currency Exchange Rate']['4. To_Currency Name']
    let exchangeRate = data['Realtime Currency Exchange Rate']['5. Exchange Rate']
    let lastRefreshed = data['Realtime Currency Exchange Rate']['6. Last Refreshed']
    let timeZone = data['Realtime Currency Exchange Rate']['7. Time Zone']
    let returnObj: ICurrencyExchange = {
      fromCurrencyCode,
      fromCurrencyName,
      toCurrencyCode,
      toCurrencyName,
      exchangeRate,
      lastRefreshed,
      timeZone
    }
    return returnObj
  } else {
    throw new Error('An error has occurred')
  }
}
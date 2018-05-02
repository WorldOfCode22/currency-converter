export default interface ICurrencyExchange{
  fromCurrencyCode?: string,
  fromCurrencyName?: string,
  toCurrencyCode?: string,
  toCurrencyName?: string,
  exchangeRate?: string,
  lastRefreshed: string,
  timeZone: string
}
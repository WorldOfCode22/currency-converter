import {GraphQLObjectType, GraphQLNonNull, GraphQLString} from 'graphql'
import CurrencyExchangeType from './types/currency-exchange-type'
import CurrencyExchangeResolver from './resolvers/currency-exchange-resolver'

export default new GraphQLObjectType({
  name: 'Root_Type',
  fields:{
    CurrencyExchange: {
      type: CurrencyExchangeType,
      args: {
        fromCountry: {type: new GraphQLNonNull(GraphQLString)},
        toCountry: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(parentVal, args){
        return CurrencyExchangeResolver(parentVal, args)
      }
    }
  }
})
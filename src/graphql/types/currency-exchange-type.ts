import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'

export default new GraphQLObjectType({
  name: 'Currency_Exchange',
  fields:{
    fromCurrencyCode: {type: GraphQLString},
    fromCurrencyName: {type: GraphQLString},
    toCurrencyCode: {type: GraphQLString},
    toCurrencyName: {type: GraphQLString},
    exchangeRate: {type: GraphQLInt},
    lastRefreshed: {type: GraphQLString},
    timeZone: {type: GraphQLString}
  }
}) 
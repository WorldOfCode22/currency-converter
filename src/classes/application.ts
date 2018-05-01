import express from 'express'
import expressGraphQL from 'express-graphql'
import config from '../env'
import schema from '../graphql/schema'
// setup environment
config() 

/**
 * Top level class that holds together application pieces
 */
class Application{
  public app = express()
  constructor(){
    this.setup() 
    this.app.listen(process.env.PORT, () => {console.log('Application running on port: ' + process.env.PORT)})    
  }

  /**
   * function to add all middleware to the express application
   */

  private setup () {
    this.app.use('/graphql', expressGraphQL({
      graphiql: true,
      schema
    }))  
  }

}

export {Application}
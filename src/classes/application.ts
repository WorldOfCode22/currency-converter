import express from 'express'
import config from '../env'

// setup environment
config() 

/**
 * Top level class that holds together application pieces
 */
class Application{
  public app = express()
  constructor(){ 
  this.app.listen(process.env.PORT, () => {console.log('Application running on port: ' + process.env.PORT)})    
  }

}

export {Application}
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const AppContext = React.createContext()

class AppProvider extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>
  , document.getElementById('root')
)
registerServiceWorker()

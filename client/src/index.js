import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

if (!window.loading){
  console.log("loading 1 "+window.loading)
  console.log(window.psid)

} else {
  console.log("loading 2 "+window.loading)
  console.log(window.psid)
  ReactDOM.render(<App/>, document.getElementById('root'))
}


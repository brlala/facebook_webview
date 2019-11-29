import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

window.extAsyncInit = function() {
  alert('working!')
  ReactDOM.render(<App/>, document.getElementById('root'))
};

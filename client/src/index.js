import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// ReactDOM.render(<App/>, document.getElementById('root'))

document.getElementById("root").addEventListener("fb_msg_event", () => {
    ReactDOM.render(<App />, document.getElementById("root"));
});

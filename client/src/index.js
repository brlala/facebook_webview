import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

document.getElementById("root").addEventListener("fb_msg_event", () => {
    ReactDOM.render(<App />, document.getElementById("root"));
});

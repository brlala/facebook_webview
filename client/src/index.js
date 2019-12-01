import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Oops from './components/layout/Oops';

document.getElementById("root").addEventListener("fb_msg_event_success", () => {
    ReactDOM.render(<App />, document.getElementById("root"));
});

document.getElementById("root").addEventListener("fb_msg_event_error", () => {
    ReactDOM.render(<Oops />, document.getElementById("root"));
});
ReactDOM.render(<Oops />, document.getElementById("root"));

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Oops from './components/layout/Oops'

// window.fbPayload = {
//   tid: '2114834805260152',
//   thread_type: 'USER_TO_PAGE',
//   psid: '2114834805260152',
//   signed_request: '"GSFNZWFLLvwNk-7rXqtTHZpLJ7al03HqwnRwPRKI0-8.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImNvbW11bml0eV9pZCI6bnVsbCwiaXNzdWVkX2F0IjoxNTc1MjU3NTA0LCJtZXRhZGF0YSI6bnVsbCwicGFnZV9pZCI6MzQ1OTA2MjE5MzgzNTcyLCJwc2lkIjoiMjExNDgzNDgwNTI2MDE1MiIsInRocmVhZF9wYXJ0aWNpcGFudF9pZHMiOm51bGwsInRocmVhZF90eXBlIjoiVVNFUl9UT19QQUdFIiwidGlkIjoiMjExNDgzNDgwNTI2MDE1MiJ9"',
//   metadata: null,
// }
document.getElementById('root').addEventListener('fb_msg_event_success', () => {
  ReactDOM.render(<App/>, document.getElementById('root'))
})

document.getElementById('root').addEventListener('fb_msg_event_error', () => {
  ReactDOM.render(<Oops/>, document.getElementById('root'))
})
// ReactDOM.render(<App />, document.getElementById("root"));

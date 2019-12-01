import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Alert from './components/layout/Alert'
import Underwriting from './components/underwriting/Underwriting'
import PrivateRoute from './components/routing/PrivateRoute'
import Oops from './components/layout/Oops';
import { connect } from 'react-redux'

// Redux
import { loadUser } from './actions/auth'
import { Provider } from 'react-redux'
import store from './store'
import setAuthToken from './utils/setAuthToken'
import {facebookLogin} from "./actions/facebook/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  window.fbPayload = {
    "tid": "2114834805260152",
    "thread_type": "USER_TO_PAGE",
    "psid": "2114834805260152",
    "signed_request": "DnCN94XCQ3dTXJg6FJGBguJFtwhEcTw51bumAeCmQc4.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImNvbW11bml0eV9pZCI6bnVsbCwiaXNzdWVkX2F0IjoxNTc1MTczNjUwLCJtZXRhZGF0YSI6bnVsbCwicGFnZV9pZCI6MzQ1OTA2MjE5MzgzNTcyLCJwc2lkIjoiMjExNDgzNDgwNTI2MDE1MiIsInRocmVhZF9wYXJ0aWNpcGFudF9pZHMiOm51bGwsInRocmVhZF90eXBlIjoiVVNFUl9UT19QQUdFIiwidGlkIjoiMjExNDgzNDgwNTI2MDE1MiJ9",
    "metadata": null
  }
  console.log(window.fbPayload)
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log('This will run after 2 second!')
  //     store.dispatch(facebookLogin(window.fbPayload))
  //     store.dispatch(loadUser())
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);
  useEffect(() => {
    store.dispatch(facebookLogin(window.fbPayload))
    store.dispatch(loadUser());
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar/>
          <Route exact path='/' component={Landing}/>
          <section className="container">
            <Alert/>
            <Switch>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
              <PrivateRoute exact path="/underwriting" component={Underwriting}/>
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App

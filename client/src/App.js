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

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  console.log('loading 3 '+window.loading)
  console.log(window.psid)
  if (!window.psid){
    return(
      <Oops/>
    )
  }

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

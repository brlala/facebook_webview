import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

const Navbar = ({ auth: { isAuthenticated, loading }, logout, page: { pageName } }) => {
  const authLinks = (
    <ul>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"/>{' '}
          <span className='hide-sm'>Logout</span></a>
      </li>
    </ul>
  )

  const guestLinks = (
    <ul>
      <li><a href="#!">Developers</a></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  )

  let title;
  let homePageLink;
  switch(pageName){
    case 'underwriting':
      title = 'Underwriting Guide'
      homePageLink = 'underwriting'
  }


  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to={`/${homePageLink}`}>
        <i className="fas fa-code"/> {title}
        </Link>
      </h1>
      {/*{!loading &&*/}
      {/*(<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}*/}
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  page: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
  auth: state.auth,
  page: state.page,
})

export default connect(mapStateToProps, { logout })(Navbar)

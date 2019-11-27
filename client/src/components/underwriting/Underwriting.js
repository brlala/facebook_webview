import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCategories } from '../../actions/underwriting/category'

const Underwriting = ({ getCategories, categories }) => {
  useEffect(() => {
    getCategories()
  }, [])
  return (
    <div>
      Underwriting Category
    </div>
  )
}

Underwriting.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
})

export default connect(mapStateToProps, { getCategories })(Underwriting)

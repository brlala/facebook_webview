import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCategories } from '../../actions/underwriting/category'
import Spinner from '../layout/Spinner'
import Category from './Category'

const Underwriting = ({ getCategories, auth, underwriting: { categories, loading } }) => {
  useEffect(() => {
    getCategories()
  }, [])
  return loading || categories === null ? <Spinner/> : <Category category={categories}/>
}

Underwriting.propTypes = {
  getCategories: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  underwriting: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  underwriting: state.underwriting,
})

export default connect(mapStateToProps, { getCategories })(Underwriting)

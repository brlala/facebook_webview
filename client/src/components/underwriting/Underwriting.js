import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCategories } from '../../actions/underwriting/category'
import { setPage } from '../../actions/page'
import Spinner from '../layout/Spinner'
import Category from './Category'

const Underwriting = ({ getCategories, setPage, auth, underwriting: { categories, loading } }) => {
  useEffect(() => {
    setPage('underwriting')
    getCategories()
  }, [])
  return loading || categories === null ? <Spinner/> : <Category category={categories}/>
}

Underwriting.propTypes = {
  getCategories: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  underwriting: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  underwriting: state.underwriting,
})

export default connect(mapStateToProps, { getCategories, setPage })(Underwriting)

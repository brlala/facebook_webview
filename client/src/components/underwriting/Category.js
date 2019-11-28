import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Category = ({ category }) => {
  const categories = category.map(cat => (
    <tr key={cat}>
      <td>{cat}</td>
      <td><button className='btn btn-primary'>View</button></td>
    </tr>
  ))

  return (
    <Fragment>
      <table>
        <thead>
        <tr>
          <th> Categories</th>
        </tr>
        </thead>
        <tbody>{categories}</tbody>
      </table>
    </Fragment>
  )
}

Category.propTypes = {
  category: PropTypes.array.isRequired,
}

export default Category
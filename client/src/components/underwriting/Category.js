import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Category = ({ category }) => {
  category = ['a','asdas','casc','asdasd']
  const categories = category.map(cat=>(
    <td key={cat}>
      <td>{cat}</td>
    </td>
  ))
  return (
    <Fragment>
      <table>
        <thead>
        <tr>
          <th> Experience </th>
        </tr>
        </thead>
        <tbody>{categories}</tbody>
      </table>
    </Fragment>
  )
}

Category.propTypes = {}

export default Category
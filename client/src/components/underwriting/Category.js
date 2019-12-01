import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getSubcategories, postSubcategory } from '../../actions/underwriting/category'
import { close } from '../../actions/facebook/webview-controls'

const Category = ({auth:{ user }, close, category, sendToGateway , getSubcategories, postSubcategory}) => {
  const categories = category.map(cat => (
    <tr key={cat}>
      <td>{cat}</td>
      <td>
        {!sendToGateway ? <button onClick={() => getSubcategories(cat)}
                                  className='btn btn-primary'>View</button>:
          <button onClick={() => {
            postSubcategory(user.facebook.id, cat)
            close()
          }} className='btn btn-primary'>Send</button> }

      </td>
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
  sendToGateway: PropTypes.bool.isRequired,
  getSubcategories: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
    postSubcategory: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    closeWindow: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  category: state.underwriting.categories,
  sendToGateway: state.underwriting.sendToGateway,
  auth: state.auth,
    closeWindow: state.facebook.closeWindow
})

export default connect(mapStateToProps, { getSubcategories, postSubcategory, close })(Category)

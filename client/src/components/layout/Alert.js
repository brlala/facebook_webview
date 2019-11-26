import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ))

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
}

//whatever you want from the root reducer, it will be passed as the component above while doing the checking with proptypes
const mapStateToProps = state => ({
  alerts: state.alert,
})
export default connect(mapStateToProps)(Alert)
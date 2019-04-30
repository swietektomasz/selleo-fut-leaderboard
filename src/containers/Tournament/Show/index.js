import React from 'react'
import { getTournaments } from '../../../store/tournaments/actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Show = props => {
  console.log(props)
  return <div> a tournament of id: {props.match.params.id}</div>
}

const mapDispatchToProps = {
  getTournaments,
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(Show),
)

Show.propTypes = {
  match: PropTypes.object,
}

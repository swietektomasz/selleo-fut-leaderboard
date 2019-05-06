import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { createTournament } from '../../../store/tournaments/actions'

class Create extends Component {
  _createTournament = () => {
    this.props.createTournament()
  }
  render() {
    return <button onClick={this._createTournament} />
  }
}

const mapDispatchToProps = {
  createTournament,
}

export default connect(
  null,
  mapDispatchToProps,
)(Create)

Create.propTypes = {
  createTournament: PropTypes.func,
}

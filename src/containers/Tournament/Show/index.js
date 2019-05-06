import React, { Component } from 'react'
import { getTournament } from '../../../store/tournaments/actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
class Show extends Component {
  componentDidMount = () => {
    this.props.getTournament(this.props.match.params.id)
  }

  render() {
    const {
      tournaments: { loading, error },
    } = this.props

    if (loading) {
      return <div>Loading</div>
    }

    if (error) {
      return <div>Error</div>
    }

    return <div>a tournament of id:</div>
  }
}

const mapStateToProps = ({ tournaments }) => {
  return {
    tournaments,
  }
}

const mapDispatchToProps = {
  getTournament,
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Show),
)

Show.propTypes = {
  match: PropTypes.object,
  getTournament: PropTypes.func,
  tournaments: PropTypes.object,
}

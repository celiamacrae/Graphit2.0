import React from 'react'
import {Link} from 'react-router-dom'
import {clearGraph} from '../store/graph'
import {connect} from 'react-redux'

class Logo extends React.Component {
  render() {
    return (
      <Link to="/">
        <div className="logo" onClick={this.props.clearChart}>
          Graph<span className="it">it</span>
        </div>
      </Link>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearChart: function() {
      dispatch(clearGraph())
    }
  }
}

export default connect(null, mapDispatchToProps)(Logo)

import React from 'react'
import {Link} from 'react-router-dom'
import {clearGraph} from '../store/graph'
import {gotUploadedFile} from '../store/upload'
import {connect} from 'react-redux'

class Logo extends React.Component {
  clearUploadedFile = () => {
    this.props.uploadFile(null)
    this.props.clearGraph(null)
  }

  render() {
    return (
      <Link to="/">
        <div className="logo" onClick={this.clearUploadedFile}>
          Graph<span className="it">it</span>
        </div>
      </Link>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  uploadFile: file => dispatch(gotUploadedFile(file)),
  clearGraph: () => dispatch(clearGraph())
})

export default connect(null, mapDispatchToProps)(Logo)

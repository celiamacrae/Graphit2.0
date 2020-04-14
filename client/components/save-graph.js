import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {Redirect} from 'react-router-dom'
import {saveChart} from '../store/savedChart'
// import {Link} from 'react-router-dom'
import history from '../history'
import {Grid} from '@material-ui/core'

class SaveGraph extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      columnData: this.props.columnData,
      columns: this.props.columns,
      userId: this.props.user.id,
      type: this.props.type
    }
    this.submitHandle = this.submitHandle.bind(this)
    this.changeHandle = this.changeHandle.bind(this)
  }

  changeHandle(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  submitHandle(event) {
    event.preventDefault()
    this.props.saveChart(this.state)
    history.push('/profile')
  }

  render() {
    return (
      <Grid
        className="saveButtons"
        container
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <div>
            <form onSubmit={this.submitHandle}>
              <label htmlFor="name">Enter Graph Name to Save</label>
              <input
                onChange={this.changeHandle}
                type="text"
                name="name"
                value={this.state.name}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    saveChart: function(chart) {
      const thunk = saveChart(chart)
      dispatch(thunk)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveGraph)

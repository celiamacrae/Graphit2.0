import React from 'react'
import {EatLoading} from 'react-loadingg'
import MainComponent from '../components/mainComponent'
import {Paper} from '@material-ui/core'
// import Logo from './logo'

export default class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      done: undefined
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({done: true}), 600)
  }

  render() {
    return (
      <div>
        {!this.state.done ? (
          <Paper className="loading-container" elevation={3}>
            <EatLoading color="blue" size="large" />
          </Paper>
        ) : (
          <Paper className="paper-container" elevation={3}>
            <MainComponent />
          </Paper>
        )}
      </div>
    )
  }
}

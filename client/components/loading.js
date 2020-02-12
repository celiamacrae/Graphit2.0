import React from 'react'
import {EatLoading} from 'react-loadingg'
import MainComponent from '../components/mainComponent'

export default class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      done: undefined
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({done: true}), 1200)
  }

  render() {
    return (
      <div>
        {!this.state.done ? (
          <EatLoading color="blue" size="large" />
        ) : (
          <MainComponent />
        )}
      </div>
    )
  }
}
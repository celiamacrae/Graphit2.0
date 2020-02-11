import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getChart} from '../store/savedChart'
import {Link} from 'react-router-dom'

class Profile extends Component {
  async componentDidMount() {
    await this.props.getChart(this.props.user.id)
  }

  render() {
    console.log('USER PROPS', this.props)
    return (
      <div>
        <h4>{this.props.user.firstName}, here are all of your saved charts</h4>
        {/* <p>My Saved Charts:</p> */}

        <div className="all-graphs">
          {this.props.savedChart.myCharts.map(chart => {
            return (
              <div className="all-graphs-single" key={chart.id}>
                <Link to={'/single/' + chart.id}>
                  <img className="chart-img" src={chart.imageURL} />
                </Link>
                <Link to={'/single/' + chart.id}>
                  <p className="graph-name">{chart.name}</p>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  savedChart: state.savedChart
})

const mapDispatchToProps = dispatch => {
  return {
    getChart: function(userId) {
      const thunk = getChart(userId)
      dispatch(thunk)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

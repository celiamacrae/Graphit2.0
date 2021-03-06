import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getChart} from '../store/savedChart'
import {Link} from 'react-router-dom'
import {Grid} from '@material-ui/core'
import Logo from './logo'

class Profile extends Component {
  async componentDidMount() {
    await this.props.getChart(this.props.user.id)
  }

  render() {
    return (
      <div className="page">
        <Grid item className="header" sm={12}>
          <Logo />
          {this.props.savedChart.myCharts.length > 0 ? (
            <h2>{this.props.user.firstName}, choose a graph to view:</h2>
          ) : (
            <h2>
              {this.props.user.firstName}, you don't have any saved graphs.
            </h2>
          )}
        </Grid>
        <div className="all-graphs">
          {this.props.savedChart.myCharts.map(chart => {
            return (
              <div key={chart.id}>
                <div>
                  <Link to={'/single/' + chart.id}>
                    <div className="all-graphs-single">
                      <div>
                        <img className="chart-img" src={chart.imageURL} />
                      </div>
                      <div>
                        <p className="graph-name">{chart.name}</p>
                      </div>
                    </div>
                  </Link>
                </div>
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

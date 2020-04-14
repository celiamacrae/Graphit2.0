import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleChart} from '../store/savedChart'
// import store from '../store'
// import html2canvas from 'html2canvas'
// import BarGraphComponent from './bar'
// import PieChartComponent from './pie'
// import LineChart from './line'
// import Scatterplot from './scatterplots'
import OutputGraph from './outputGraph'
import {Grid} from '@material-ui/core'

class SingleChart extends React.Component {
  componentDidMount() {
    this.props.getSingleChart()
  }

  render() {
    return (
      <div id="singleout">
        <Grid id="sing" item sm={10}>
          <OutputGraph graphType={this.props.graph.type[0]} new={false} />
        </Grid>

        {/* <div id='singleout'>
          {this.props.graph.type[0] === 'pie' ? (
            <PieChartComponent
              avg={false}
              graphtype={this.props.graph.type[0]}
              name={this.props.graph.name}
            />
          ) : this.props.graph.type[0] === 'avg-pie' ? (
            <PieChartComponent
              avg={true}
              graphtype={this.props.graph.type[0]}
              type={this.props.graphtype}
            />
          ) : this.props.graph.type[0] === 'bar' ? (
            <BarGraphComponent
              avg={false}
              graphtype={this.props.graph.type[0]}
              type={this.props.graphtype}
            />
          ) : this.props.graph.type[0] === 'avg-bar' ? (
            <BarGraphComponent
              avg={true}
              graphtype={this.props.graph.type[0]}
              type={this.props.graphtype}
            />
          ) : this.props.graph.type[0] === 'line' ? (
            <LineChart
              avg={false}
              graphtype={this.props.graph.type[0]}
              type={this.props.graphtype}
            />
          ) : this.props.graph.type[0] === 'avg-line' ? (
            <LineChart
              avg={true}
              graphtype={this.props.graph.type[0]}
              type={this.props.graphtype}
            />
          ) : this.props.graph.type[0] === 'scatter' ? (
            <Scatterplot
              graphtype={this.props.graph.type[0]}
              type={this.props.graphtype}
            />
          ) : (
            <div />
          )}
        </div> */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  savedChart: state.savedChart,
  graph: state.graph
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSingleChart: function() {
      const chartId = ownProps.match.params.id
      const thunk = getSingleChart(chartId)
      dispatch(thunk)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleChart)

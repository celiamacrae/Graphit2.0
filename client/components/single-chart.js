import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleChart} from '../store/savedChart'
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

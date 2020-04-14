import React, {Fragment} from 'react'
import {Grid, Button} from '@material-ui/core'

const SaveButtons2 = ({saveAsPDF, deleteGraph}) => {
  return (
    <Grid
      className="saveButtons"
      container
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Button variant="contained" color="primary" onClick={saveAsPDF}>
          Save as PDF
        </Button>
      </Grid>
      {/* <Grid item>
        <Button variant="contained" color="primary" onClick={deleteGraph}>
          Delete this Chart
        </Button>
      </Grid> */}
    </Grid>
  )
}

export default SaveButtons2

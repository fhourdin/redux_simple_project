import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Parent from 'components/Parent'

const styles = (theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#34495e",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
})

const App = (props) => {
  const { classes } = props

  return (
    <div className={classes.container}>
      <Parent />
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)

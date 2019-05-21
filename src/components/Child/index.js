import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { connect } from "react-redux"
import { killChild } from "actions"

const styles = (theme) => ({
	container: {
		height: 100,
		width: 200,
		backgroundColor: "#2ecc71",
		borderRadius: 5,
		margin: 10
	}
})

const Child = (props) => {
	const { classes, name, killChild } = props

	return (
		<div className={classes.container} onClick={() => killChild(name)}>
			Je m'appelle {name}
		</div>
	)
}

Child.propTypes = {
	classes: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => ({
	killChild: (name) => dispatch(killChild(name))
})

const StylesComponent = withStyles(styles)(Child)
export default connect(
	null,
	mapDispatchToProps
)(StylesComponent)

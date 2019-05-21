import React, { useState } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { connect } from "react-redux"
import * as actions from "actions"
import Child from "components/Child"

const styles = (theme) => ({
	container: {}
})

const Parent = (props) => {
	const { classes, children, addChild, killAllChildren } = props
	const [input_value, setInputValue] = useState("")

	const handleClick = () => {
		addChild(input_value)
		setInputValue("")
	}

	return (
		<div className={classes.container}>
			{children.map((child, i) => (
				<Child key={i} name={child.name} />
			))}

			<input
				value={input_value}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button onClick={() => handleClick()}>Encore un !</button>
			<button onClick={() => killAllChildren()}>J'en veux plus</button>
		</div>
	)
}

Parent.propTypes = {
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	children: state.children
})

const mapDispatchToProps = (dispatch) => ({
	addChild: (name) => dispatch(actions.addChild(name)),
	killAllChildren: () => dispatch(actions.killAllChildren())
})

const StylesComponent = withStyles(styles)(Parent)
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StylesComponent)

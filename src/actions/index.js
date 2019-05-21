export const addChild = (child_name) => ({
	type: "ADD_CHILD",
	payload: child_name
})

export const killChild = (name) => ({
	type: "KILL_CHILD",
	payload: name
})

export const killAllChildren = () => ({
	type: "KILL_ALL_CHILDREN"
})

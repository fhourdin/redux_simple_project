import filter from "lodash/filter"

const INITIAL_STATE = {
  children: [],
  control: true,
  magic: "Johnson"
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_CHILD":
      return {
        ...state,
        children: [...state.children, { name: action.payload }]
      }

    case "KILL_CHILD":
      return {
        ...state,
        children: filter(
          state.children,
          (child) => child.name !== action.payload
        )
      }

    case "KILL_ALL_CHILDREN":
      return {
        ...state,
        children: []
      }

    default:
      return state
  }
}

export default reducer

export const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    RESET: "reset",
    SETVALUE: "setvalue"
}

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return {count: state.count + 1}
        case ACTIONS.DECREMENT:
            return {count: state.count - 1} 
        case ACTIONS.RESET:
            return {count: 0}
        case ACTIONS.SETVALUE:
            return {count: action.payload} 
        default:
            return state   
    }
}
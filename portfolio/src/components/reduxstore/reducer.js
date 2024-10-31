function reducer(state = { a:[] }, action) {
    if (action.type === 'A') {
        state={
            a:[...state.a,action.payload]
        }
        // return (
        // { ...state, a: [state.a, action.payload] }
        // )
    }
    return state

}
export default reducer
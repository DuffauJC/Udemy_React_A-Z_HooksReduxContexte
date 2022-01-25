const INITIAL_STATE = {
    cart: 0,
}
function addCartReducer(state = INITIAL_STATE, action
) {

    switch (action.type) {
        case 'ADDCART':
            return {
                ...state,
                cart: action.payload,
            }   
    }
    //console.log(state);
    return state
}
export default addCartReducer
export default (state = [], action) => {
    console.log('Reducer was called');
    switch(action.type) {
        case 'FETCH_POSTS': 
            return action.payload;
        default:
            return state;
    }
}
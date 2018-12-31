import jsonPlaceHolder from '../apis/jsonPlaceholder';

// export const fetchPosts =  () => {
//     return async function(dispatch, getState) {
//         const promise = await jsonPlaceHolder.get('/posts');
//         return {
//             type: 'FETCH_POSTS',
//             payload: promise
//         }
//     }  
// }


// shortened form of above thing.
export const fetchPosts =  () => async dispatch => {
    console.log('Reached action');
    const promise = await jsonPlaceHolder.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: promise
    })
}



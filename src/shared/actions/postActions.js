import Request from 'superagent'

const fetchPosts = () => {
  console.log('action')
  return new Promise((res, err) => {
    setTimeout(function(){
      res('xxx')
    }, 1900)
  })
}

export function testPosts() {
  return {
    type: 'TEST_POSTS',
    payload: {
      promise: fetchPosts(),
    }
  }
}

export function getPosts() {
  return {
    type: 'GET_POSTS',
    payload: {
      promise: fetchPosts(),
      onSuccess: () => {
        console.log('aaargh')
        return { test: 'test' }
      },
      onError: () => console.log('error')
    }
  }
}

// export function doSomethingAsync() {
//   return (dispatch) => {
//     dispatch({ type: SOMETHING_STARTED });

//     return getPosts().then(
//       (result) =>  dispatch({ type: SOMETHING_COMPLETED, result }),
//       (error) =>  dispatch({ type: SOMETHING_FAILED, error })
//     );
//   };
// }

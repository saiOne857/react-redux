
const receivedPosts = function(posts) {
  return {
    type: 'RECEIVED_POSTS', 
    posts
  }
}

export function fetchPosts() {
  return function (dispatch) {
    return fetch('https://my-json-server.typicode.com/typicode/demo/posts')
    .then(
       response => response.json(),
       error => console.log('An error occurred.', error),
   )
    .then((json) => {
       dispatch(receivedPosts(json));
    },
   );
  };
 }
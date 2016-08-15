export function putCmsPost() {
  return {
    type: 'PUT_POST',
    post: null
  }
}

export function editPost(post) {
  return {
    type: 'EDIT_POST',
    post
  }
}

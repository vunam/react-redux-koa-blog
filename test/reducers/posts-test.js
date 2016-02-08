// import React from 'react'
// import { createStore } from 'redux'
// import { expect } from 'chai'
// import sinon from 'sinon'
// import reducer from '../../src/shared/reducers/posts'
// import * as actions from '../../src/shared/actions/postActions'

// describe('Posts Reducer', () => {

//   it('Store is ok', function() {
//     const store = createStore(reducer)
//     expect(store).to.be.ok
//   })

//   it('Action gets latests posts', function(done) {
//     const store = createStore(reducer)
//     let state = store.getState()
//     expect(state.posts).to.be.equal(undefined)
//     store.dispatch(actions.getPosts())
//     store.subscribe((data) => {
//       console.log(store.getState())
//       done()
//     })
//   })

// })
import React from 'react'
import { createStore } from 'redux'
import { assert } from 'chai'
import sinon from 'sinon'
import nock from 'nock'
import mockRes from '../mocks/mock-latest-posts.json'
import configureStore from '../../src/shared/helpers/store'
import reducer from '../../src/shared/reducers/posts'
import * as actions from '../../src/shared/actions/posts'

describe('Posts Reducer', () => {

  it('Store is ok', function() {
    const store = configureStore({}, [reducer])
    assert.ok(store)
  })

  it('Action gets latests posts', function(done) {

    nock('http://localhost:4000')
      .get('/api/posts/latest')
      .reply(200, mockRes)

    const store = configureStore({}, { posts: reducer })
    store.subscribe(() => {
      const state = store.getState()
      if (state.posts.list.length > 0) {
        assert.deepEqual(state.posts.list, mockRes.posts)
        done()
      }
    })
    store.dispatch(actions.getPosts('latest'))
  })

  it('Action gets category posts', function(done) {

    nock('http://localhost:4000')
      .get('/api/posts/travel')
      .reply(200, mockRes)

    const store = configureStore({}, { posts: reducer })
    store.subscribe(() => {
      const state = store.getState()
      if (state.posts.list.length > 0) {
        assert.deepEqual(state.posts.list, mockRes.posts)
        done()
      }
    })
    store.dispatch(actions.getPosts('travel'))
  })

})

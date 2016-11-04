
import { assert } from 'chai'
import sinon from 'sinon'
import { getPosts } from '../../../src/server/api-handler'

describe('Api', () => {

  it('getPosts', function() {
    const result = getPosts('latest')
    assert.ok(result)
  })

})

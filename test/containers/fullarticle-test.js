import React from 'react'
import { render } from 'enzyme';
import { assert } from 'chai'
import sinon from 'sinon'
import mockData from '../../db.json'

import FullArticle from '../../src/shared/app/containers/FullArticle/FullArticle.jsx'

const props = {
  post: mockData.posts[0],
  getPostBySeo: sinon.spy(),
  params: {
    seo: ''
  }
}

describe('<FullArticle />', () => {
  const { WrappedComponent } = FullArticle
  const component = render(<WrappedComponent {...props} />)

  it('Renders ok', function() {
    assert.ok(component)
  })

  it('Has an article', function() {
    const node = component.find('.Article')
    assert.equal(node.length, 1)
    assert.isAtLeast(node.text().length, 2)
  })

  it('Has working backLink', function() {
    const node = component.find('.FullArticle-backLink')
    assert.equal(node.length, 1)
  })

  it('Get post function is called', function() {
    assert.isTrue(props.getPostBySeo.calledOnce)
  })

})
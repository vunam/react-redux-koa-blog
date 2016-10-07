import React from 'react'
import { render } from 'enzyme';
import { assert } from 'chai'
import sinon from 'sinon'

import ArticleContainer from '../../src/shared/app/containers/ArticleContainer/ArticleContainer.jsx'

describe('<ArticleContainer />', () => {
  const data = {
    author: 'An author',
    date: '2016-01-20T12:00:00',
    published: true,
    subTitle: 'A sub title',
    text: 'Text',
    title: 'A blog title'
  }
  const posts = new Array(3).fill(data)
  const { WrappedComponent } = ArticleContainer
  const component = render(<WrappedComponent posts={posts} />)

  it('Renders ok', function() {
    assert.ok(component)
  })

  it('Has ArticleList', function() {
    const node = component.find('.ArticleContainer')
    assert.equal(node.length, 1)
  })

  it('Has at least 3 articles', function() {
    const nodes = component.find('.ArticleContainer').find('article')
    assert.isAtLeast(nodes.length, 3)
  })
})

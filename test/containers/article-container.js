import React from 'react'
import { render } from 'enzyme';
import { expect } from 'chai'
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
    expect(component).to.be.ok
  })

  it('Has ArticleList', function() {
    const node = component.find('.ArticleContainer')
    expect(node).to.have.length(1)
  })

  it('Has at least 3 articles', function() {
    const nodes = component.find('.ArticleContainer').find('article')
    expect(nodes).to.have.length.of.at.least(3)
  })
})

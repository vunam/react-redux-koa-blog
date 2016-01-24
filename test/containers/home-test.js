import React from 'react'
import { render } from 'enzyme';
import { expect } from 'chai'
import sinon from 'sinon'

import Home from '../../src/shared/containers/Home/Home.jsx'

describe('<Home />', () => {

  const wrapper = render(<Home />)

  it('Renders ok', function() {
    expect(wrapper).to.be.ok
  })

  it('Has a sidebar', function() {
    const node = wrapper.find('.Main-sidebar')
    expect(node).to.have.length(1)
  })

  it('Has content', function() {
    const node = wrapper.find('.Main-content')
    expect(node).to.have.length(1)
  })

  it('Has ArticleList', function() {
    const node = wrapper.find('.ArticleContainer')
    expect(node).to.have.length(1)
  })

  it('Has at least 3 articles', function() {
    const nodes = wrapper.find('.ArticleContainer').find('article')
    expect(nodes).to.have.length.of.at.least(3)
  })

})
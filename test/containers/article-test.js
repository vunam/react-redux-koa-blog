import React from 'react'
import { render } from 'enzyme';
import { expect } from 'chai'
import sinon from 'sinon'

import Article from '../../src/shared/components/Article/Article.jsx'

describe('<Article />', () => {
  const data = {
    author: "An author",
    date: "2016-01-20T12:00:00",
    published: true,
    subTitle: "A sub title",
    text: "<p>Test text</p>",
    title: "A blog title"
  }

  const component = render(<Article {...data} />)

  it('Renders ok', function() {
    expect(component).to.be.ok
  })

  it('Has one h1 tag with title', function() {
    const node = component.find('h1')
    expect(node).to.have.length(1)
    expect(node.text()).to.have.length.of.at.least(1)
  })

  it('Has text', function() {
    const node = component.find('.Article-text')
    expect(node).to.have.length(1)
    expect(node.text()).to.have.length.of.at.least(1)
  })

  it('Has header', function() {
    const node = component.find('header')
    expect(node).to.have.length(1)
  })

  it('Has time', function() {
    const node = component.find('time')
    expect(node).to.have.length(1)
    expect(node.text()).to.have.length.of.at.least(1)
  })

  it('Has author', function() {
    const node = component.find('.Article-author')
    expect(node).to.have.length(1)
    expect(node.text()).to.have.length.of.at.least(1)
  })

})
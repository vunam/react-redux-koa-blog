import React from 'react'
import { render } from 'enzyme';
import { expect } from 'chai'
import sinon from 'sinon'
import mockData from '../../db.json'

import { strToShortDateTime } from '../../src/shared/helpers/dates.js'
import Article from '../../src/shared/app/components/Article/Article.jsx'

describe('<Article />', () => {
  const data = mockData.posts[0]

  const component = render(<Article {...data} />)

  it('Renders ok', function() {
    expect(component).to.be.ok
  })

  it('Has one h1 tag with correct title', function() {
    const node = component.find('h1')
    expect(node).to.have.length(1)
    expect(node.text()).to.have.length.of.at.least(1)
    expect(node.text()).to.equal(data.title)
  })

  it('Has text', function() {
    const node = component.find('.Article-text')
    expect(node).to.have.length(1)
    expect(node.text()).to.have.length.of.at.least(100)
  })

  it('Has header', function() {
    const node = component.find('header')
    expect(node).to.have.length(1)
  })

  it('Has correct time', function() {
    const node = component.find('time')
    const text = node.text()
    expect(node).to.have.length(1)
    expect(text).to.have.length.of.at.least(1)
    expect(text).to.equal(strToShortDateTime(text))
  })

  it('Has correct author', function() {
    const node = component.find('.Article-author')
    const text = node.text()
    expect(node).to.have.length(1)
    expect(text).to.have.length.of.at.least(1)
    expect(text).to.equal(data.author)
  })
})

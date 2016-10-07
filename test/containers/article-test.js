import React from 'react'
import { render } from 'enzyme';
import { assert } from 'chai'
import sinon from 'sinon'
import mockData from '../../db.json'

import { strToShortDateTime } from '../../src/shared/helpers/dates.js'
import Article from '../../src/shared/app/components/Article/Article.jsx'

describe('<Article />', () => {
  const data = mockData.posts[0]

  const component = render(<Article {...data} />)

  it('Renders ok', function() {
    assert.ok(component)
  })

  it('Has one h1 tag with correct title', function() {
    const node = component.find('h1')
    assert.equal(node.length, 1)
    assert.equal(node.text(), data.title)
  })

  it('Has text', function() {
    const node = component.find('.Article-text')
    assert.equal(node.length, 1)
    assert.isAtLeast(node.text().length, 100)
  })

  it('Has header', function() {
    const node = component.find('header')
    assert.equal(node.length, 1)
  })

  it('Has correct time', function() {
    const node = component.find('time')
    const text = node.text()
    assert.equal(node.length, 1)
    assert.equal(text, strToShortDateTime(text))
  })

  it('Has correct author', function() {
    const node = component.find('.Article-author')
    const text = node.text()
    assert.equal(node.length, 1)
    assert.equal(text, data.author)
  })
})

import React from 'react'
import { render } from 'enzyme';
import { expect } from 'chai'
import sinon from 'sinon'

import Article from '../../src/shared/components/Article/Article.jsx'

describe('<Article />', () => {

  const wrapper = render(<Article />)

  it('Renders ok', function() {
    expect(wrapper).to.be.ok
  })

  it('Has one h1 tag', function() {
    const node = wrapper.find('h1')
    expect(node).to.have.length(1)
  })

  it('Has paragraph(s)', function() {
    const node = wrapper.find('p')
    expect(node).to.have.length.of.at.least(1)
  })

  it('Has header', function() {
    const node = wrapper.find('header')
    expect(node).to.have.length(1)
  })


  it('Has time', function() {
    const node = wrapper.find('time')
    expect(node).to.have.length(1)
  })

  it('Has author', function() {
    const node = wrapper.find('.Article-author')
    expect(node).to.have.length(1)
  })

})
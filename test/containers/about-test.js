import React from 'react'
import { render } from 'enzyme';
import { expect } from 'chai'
import sinon from 'sinon'

import Html from '../../src/shared/containers/about.jsx'

describe('<Html />', () => {

  const wrapper = render(<Html component={""} bundle={""} />)

  it('Renders ok', function() {
    expect(wrapper).to.be.ok
  })

  it('Has one h1 tag', function() {
    const node = wrapper.find('h1')
    expect(node).to.have.length(1)
  })

  it('Has one h2 tag', function() {
    const node = wrapper.find('h2')
    expect(node).to.have.length(1)
  })

  it('Has a logo', function() {
    const node = wrapper.find('img')
    expect(node).to.have.length(1)
  })
})
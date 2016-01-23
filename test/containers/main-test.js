import React from 'react'
import { render } from 'enzyme';
import { expect } from 'chai'
import sinon from 'sinon'

import Html from '../../src/shared/placeholder/html.jsx'

describe('<Html />', () => {

  const wrapper = render(<Html component={""} bundle={""} />)

  it('Renders ok', function() {
    expect(wrapper).to.be.ok
  })

  it('Contains root element', function() {
    const node = wrapper.find('#root')
    expect(node).to.have.length(1)
  })
})
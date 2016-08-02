import React from 'react'
import { shallow } from 'enzyme';
import { expect } from 'chai'
import sinon from 'sinon'

import Header from '../../src/shared/app/components/Header/Header.jsx'

describe('<Header />', () => {
  const component = shallow(<Header />)

  it('Renders ok', function() {
    expect(component).to.be.ok
  })

  it('Has title', function() {
    const node = component.find('.Header-title')
    expect(node.text()).to.have.length.of.at.least(1)
  })

  it('Has description', function() {
    const node = component.find('.Header-description')
    expect(node.text()).to.have.length.of.at.least(1)
  })

})
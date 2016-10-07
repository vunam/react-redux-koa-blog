import React from 'react'
import { shallow } from 'enzyme';
import { assert } from 'chai'
import sinon from 'sinon'

import Header from '../../src/shared/app/components/Header/Header.jsx'

describe('<Header />', () => {
  const component = shallow(<Header />)

  it('Renders ok', function() {
    assert.ok(component)
  })

  it('Has title', function() {
    const node = component.find('.Header-title')
    assert.isAtLeast(node.text().length, 1)
  })

  it('Has description', function() {
    const node = component.find('.Header-description')
    assert.isAtLeast(node.text().length, 1)
  })

})
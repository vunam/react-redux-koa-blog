import React from 'react'
import { shallow } from 'enzyme';
import { expect } from 'chai'
import sinon from 'sinon'

import Home from '../../src/shared/containers/Home/Home.jsx'

describe('<Home />', () => {

  const { WrappedComponent } = Home
  const component = shallow(<WrappedComponent />)

  it('Renders ok', function() {
    expect(component).to.be.ok
  })

  it('Has a sidebar', function() {
    const node = component.find('.Main-sidebar')
    expect(node).to.have.length(1)
  })

  it('Has content', function() {
    const node = component.find('.Main-content')
    expect(node).to.have.length(1)
  })

})
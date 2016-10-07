import React from 'react'
import { shallow } from 'enzyme';
import { assert } from 'chai'
import sinon from 'sinon'

import Home from '../../src/shared/app/containers/Home/Home.jsx'

describe('<Home />', () => {

  const { WrappedComponent } = Home
  const component = shallow(<WrappedComponent />)

  it('Renders ok', function() {
    assert.ok(component)
  })
  
})
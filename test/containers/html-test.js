import React from 'react'
import { render } from 'enzyme';
import { expect } from 'chai'
import sinon from 'sinon'
import configureStore from '../../src/shared/helpers/store'
import Html from '../../src/shared/base/Html.jsx'

describe('<Html />', () => {

  const store = configureStore({})

  const wrapper = render(<Html store={store} component={""} bundle={""} />)

  it('Renders ok', function() {
    expect(wrapper).to.be.ok
  })

  it('Contains root element', function() {
    const node = wrapper.find('#root')
    expect(node).to.have.length(1)
  })
})
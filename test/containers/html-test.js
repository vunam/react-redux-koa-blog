import React from 'react'
import { render } from 'enzyme';
import { assert } from 'chai'
import sinon from 'sinon'
import configureStore from '../../src/shared/helpers/store'
import Html from '../../src/shared/base/Html.jsx'

describe('<Html />', () => {

  const store = configureStore({})

  const wrapper = render(<Html store={store} component={""} bundle={""} />)

  it('Renders ok', function() {
    assert.ok(wrapper)
  })

  it('Contains root element', function() {
    const node = wrapper.find('#root')
    assert.equal(node.length, 1)
  })
})

import React from 'react'
import { render } from 'enzyme';
import { expect } from 'chai'
import sinon from 'sinon'

import FullArticle from '../../src/shared/containers/FullArticle/FullArticle.jsx'

describe('<FullArticle />', () => {
  const { WrappedComponent } = FullArticle
  const component = render(<WrappedComponent />)

  it('Renders ok', function() {
    expect(component).to.be.ok
  })

  it('Has an article', function() {
    const node = component.find('.Article')
    expect(node).to.have.length(1)
    expect(node.text()).to.have.length.of.at.least(1)
  })

  it('Has working backLink', function() {
    const node = component.find('.FullArticle-backLink')
    expect(node).to.have.length(1)

  })

})
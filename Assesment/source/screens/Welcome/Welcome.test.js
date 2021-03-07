import React from 'react'
import renderer from 'react-test-renderer'

import Welcome from './Welcome'

it ("renders when there is no username entered", () => {
    const tree = renderer.create(<Welcome/>).toJSON()
    expect(tree).toMatchSnapshot()
})
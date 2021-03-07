import React from 'react'
import { create, act } from 'react-test-renderer'
import Welcome from './Welcome'

const tree = create(<Welcome />).toJSON()

test('snapshot', () => {
    expect(tree).toMatchSnapShot();
});

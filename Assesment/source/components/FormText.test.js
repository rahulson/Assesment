import React from 'react';
import FormButton from './FormButton'
import { render, fireEvent } from '@testing-library/react-native'
import FormText from './FormText';


test('it should have text as children', () => {
    const text = 'Uni Test';
    const { getByText, toJSON } = render(<FormText>{text}</FormText>);
    const title = getByText(text);
    expect(title).toBeDefined();

    // should match the snapshot
    expect(toJSON()).toMatchSnapshot();
});
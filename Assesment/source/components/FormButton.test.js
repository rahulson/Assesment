import React from 'react';
import FormButton from './FormButton'
import { render, fireEvent } from '@testing-library/react-native'


test('Button ', () => {
    const mockPressFunction = jest.fn();
    const title = 'FormButton';
    const { getByText, toJSON } = render(
        <FormButton title={title} onPress={mockPressFunction} />,
    );
    const button = getByText(title);
    expect(button).toBeDefined();
    fireEvent.press(button);
    expect(mockPressFunction).toHaveBeenCalled();

    // should match the snapshot
    expect(toJSON()).toMatchSnapshot();
});
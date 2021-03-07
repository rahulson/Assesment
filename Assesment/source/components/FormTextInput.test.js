import React from 'react';
import { render, fireEvent } from '@testing-library/react-native'
import FormTextInput from './FormTextInput';


test('should test placeholder and should call onChangeText when user is typing', () => {
    const onChangeTextEvent = jest.fn();
    const placeholderLabel = 'Enter Username';
    const { getByPlaceholderText, toJSON } = render(
        <FormTextInput placeholder={placeholderLabel} onChangeText={onChangeTextEvent} />,
    );
    const textInputInstance = getByPlaceholderText(placeholderLabel);
    expect(textInputInstance).toBeDefined();
    fireEvent(textInputInstance, 'onChangeText', 'unitesting');
    expect(onChangeTextEvent).toHaveBeenCalledWith('unitesting');


    expect(toJSON()).toMatchSnapshot();
});
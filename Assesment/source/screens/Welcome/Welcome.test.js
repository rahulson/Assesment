import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import NotifictaionMessage from '../../constants/NotificationMessage'
import Welcome from './Welcome'

describe('Testing welcome screen', () => {

    test('screen contains a button linking to the userinfo page', () => {
        const buttonTitle = 'Enter'
        const { toJSON, getByTestId, getByText } = render(
            <Welcome />
        );
        const enterButton = getByText(buttonTitle);
        expect(enterButton).toBeTruthy();
    })

    test('should tap button without entering user name', () => {
        const buttonTitle = 'Enter'
        const formTextInputPlaceHolder = 'Enter User Name'
        const { toJSON, getByTestId, getByText, getByPlaceholderText } = render(
            <Welcome />
        );
    
        // test continue press without entering name
        const enterButton = getByText(buttonTitle);
        fireEvent.press(enterButton);

        const formTextInput = getByPlaceholderText(formTextInputPlaceHolder)
        expect(formTextInput).toHaveLength(0);
    

        
        expect(toJSON).toMatchSnapShot();
    });
})


import React from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';

const FormText = (props) => {

    const { textStyle, children, ...restProps } = props

    return (
        <Text style={textStyle} {...restProps}>
            {children}
        </Text>    
    )
}

FormText.propTypes = {
    textStyle: PropTypes.object,
    text: PropTypes.string,
    onPress: PropTypes.func
};

FormText.defaultProps = {
    textStyle: {},
    text: ''
};

export default FormText
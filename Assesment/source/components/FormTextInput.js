import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ColorConstants } from '../constants/ColorConstants'
import PropTypes from 'prop-types';

const FormTextInput = (props) => {

    const { containerStyle, inputContainerStyle, ...restProps } = props

    return (
        <View style={[styles.container, containerStyle]}>
            <TextInput
                style={[styles.inputContainer, inputContainerStyle]}
                {...restProps}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: '5%',
        width: '100%'
    },
    inputContainer: {
        height: hp(6),
        backgroundColor: ColorConstants.WHITE,
        borderRadius: hp(1),
        borderWidth: 1.0,
        borderColor: ColorConstants.LIGHT_GREY,
        width: '100%',
        paddingHorizontal: hp(1)
    }
})

FormTextInput.propTypes = {
    containerStyle: PropTypes.object,
    inputContainerStyle: PropTypes.object
};

FormTextInput.defaultProps = {
    containerStyle: {},
    inputContainerStyle: {}
};

export default FormTextInput
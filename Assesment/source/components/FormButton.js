import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ColorConstants } from '../constants/ColorConstants'
import FontSize from '../constants/FontSize'
import PropTypes from 'prop-types';

const FormButton = (props) => {
    const { containerStyle, titleStyle, title = '', onPress } = props
    return (
        <TouchableOpacity style={[styles.container, containerStyle]} onPress={() => onPress()}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(6),
        backgroundColor: ColorConstants.PAINT_CHIP,
        borderRadius: hp(1.0)
    },
    title: {
        color: ColorConstants.WHITE,
        fontSize: FontSize.tow,
        fontWeight: '600'
    }
})

FormButton.propTypes = {
    containerStyle: PropTypes.object,
    titleStyle: PropTypes.object,
    title: PropTypes.string,
    onPress: PropTypes.func
};

FormButton.defaultProps = {
    containerStyle: {},
    titleStyle: {},
    title: '',
    onPress: () => { }
};

export default FormButton
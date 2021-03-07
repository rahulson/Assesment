import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FormTextInput, FormButton, FormText } from '../../components'
import { SCREEN_CONSTANTS } from '../../constants/AppConstants'
import NavigationService from '../../navigation/NavigationService'
import NotifictaionMessage from '../../constants/NotificationMessage'
import { ColorConstants } from '../../constants/ColorConstants'
import FontSize from '../../constants/FontSize'
import isEmpty from 'lodash/isEmpty'
import { useAppContext } from '../../provider/UserProvider'
import { STORE_USER_NAME } from '../../store/UserAction'
import { isEmulator } from '../../utils/helper'

const Welcome = () => {

    const appContext = useAppContext()

    const dispatch = appContext && appContext.dispatch

    const [userName, setUserName] = useState('')

    function onTapEnter() {
        if (isEmpty(userName)) {
            NotifictaionMessage.showSimpleMessage('warning', { message: 'Please enter username', description: '' })
            return
        }
        dispatch({ type: STORE_USER_NAME, payload: userName })
        NavigationService.push(SCREEN_CONSTANTS.USERINFO)
    }

    function isSimulator() {
        return isEmulator() === 1 ? 'True' : 'False'
    }

    function renderDeviceCheck() {
        return (
            <View style={styles.contentContainer}>
                <FormText textStyle={styles.content}>Is App Running on Simulator?</FormText>
                <FormText textStyle={styles.content}>{isSimulator()}</FormText>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            {renderDeviceCheck()}
            <View style={styles.form}>
                <FormTextInput
                    containerStyle={styles.textContainer}
                    placeholder="Enter User Name"
                    autoCapitalize='none'
                    value={userName}
                    onChangeText={(value) => setUserName(value)}
                />
                <FormButton title={'Enter'} onPress={() => onTapEnter()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorConstants.WHITE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        alignSelf: 'center',
        textAlign: 'center',
        color: ColorConstants.PAINT_CHIP,
        fontSize: FontSize.extraLarge,
        fontWeight: '700',
        position: 'absolute',
        top: hp(8)
    },
    content: {
        color: ColorConstants.PAINT_CHIP, 
        fontSize: FontSize.tow, 
        fontWeight: '700', 
        marginBottom: hp(1)
    },
    contentContainer: {
        width: '100%', 
        marginBottom: hp(2), 
        justifyContent:'center', 
        alignItems:'center'
    },
    form: {
        width: '100%',
        paddingHorizontal: wp(10)
    },
    textContainer: {
        height: hp(6),
        width: '100%',
        backgroundColor: ColorConstants.WHITE,
        borderRadius: hp(1),
        marginBottom: hp(2)
    },
})

export default Welcome
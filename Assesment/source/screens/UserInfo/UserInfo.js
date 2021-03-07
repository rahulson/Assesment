import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useAppContext } from '../../provider/UserProvider'
import { ColorConstants } from '../../constants/ColorConstants'
import FontSize from '../../constants/FontSize'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FormButton } from '../../components'
import { SCREEN_CONSTANTS } from '../../constants/AppConstants'
import NavigationService from '../../navigation/NavigationService'

const UserInfo = () => {

    const appContext = useAppContext()
    const { state } = appContext

    function onTapButton() {
        NavigationService.push(SCREEN_CONSTANTS.VARIANTS)
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.content}>{state.userName}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <FormButton title={'Go To Variants'} onPress={() => onTapButton()} />
            </View>       
        </View>    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    contentContainer: {
        position: 'absolute', 
        top:hp(0.5), 
        right:hp(1)
    },
    content: {
        color: ColorConstants.PAINT_CHIP, 
        fontSize: FontSize.regular
    },
    buttonContainer: {
        width:'100%', 
        paddingHorizontal: hp(2)
    }
})

export default UserInfo
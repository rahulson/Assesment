import React from 'react'
import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import { FormButton, FormSwipeButton } from '../../components'
import { useAppContext } from '../../provider/UserProvider'
import { ColorConstants } from '../../constants/ColorConstants'
import FontSize from '../../constants/FontSize'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Variants = () => {

    const appContext = useAppContext()
    const { state } = appContext


    function renderSwipeButton() {
        return (
            <FormSwipeButton
                childrenContainer={{ backgroundColor: 'transparent' }}
                onEndReached={() => {
                    Alert.alert('Attention', 'onEndReached!');
                }}
                containerStyle={styles.swipeButtonContainerStyle}
                sliderElement={
                    <Image
                        style={styles.buttonImage}
                        source={{
                            uri:
                                'https://facebook.github.io/react-native/docs/assets/favicon.png',
                        }}
                    />
                }
            >
                <Text style={styles.swipeButtonTitle}>{'Slide me to continue'}</Text>
            </FormSwipeButton>
        )
    }

    function onTapButton() {
        console.log('on Tap Button')
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.content}>{state.userName}</Text>
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.title}>4 variations of button</Text>
                <View style={styles.buttonContainer}>
                    <FormButton containerStyle={[styles.button, { backgroundColor: 'transparent' }]} title={'Press Me'} onPress={() => onTapButton()} />
                    <FormButton containerStyle={[styles.button, { backgroundColor: ColorConstants.CYAN_BLUE }]} title={'Press Me'} onPress={() => onTapButton()} />
                    <FormButton containerStyle={styles.button} title={'Press Me'} onPress={() => onTapButton()} />
                    {renderSwipeButton()}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorConstants.JAGUAR
    },
    subContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: hp(1),
        alignItems: "center",
    },
    contentContainer: {
        position: 'absolute',
        top: hp(0.5),
        right: hp(1)
    },
    content: {
        color: ColorConstants.WHITE,
        fontSize: FontSize.regular
    },
    button: {
        marginBottom: hp(2)
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: hp(2)
    },
    title: {
        color: 'green',
        fontSize: FontSize.regular,
        fontWeight: '700',
        marginBottom: hp(1)
    },
    swipeButtonContainerStyle: {
        backgroundColor: ColorConstants.JAGUAR,
        marginBottom: hp(3),
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderWidth: 1.0,
        borderColor: 'gray'
    },
    buttonImage: {
        width: hp(5),
        margin: 4,
        borderRadius: 5,
        height: hp(5),
        backgroundColor: 'red',
    },
    swipeButtonTitle: {
        color: ColorConstants.PAINT_CHIP, 
        fontSize: FontSize.tow
    }
})

export default Variants
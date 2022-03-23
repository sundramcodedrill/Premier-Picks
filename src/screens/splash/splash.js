import { StyleSheet, ActivityIndicator, Text, View, ImageBackground, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'

import { BACKGROUNDIMAGE, LOGO } from '../../assets/Images/index'

import { Welcome } from '../external'

const { width, height } = Dimensions.get('screen')


const Splash = (props) => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(true)
    function Timeout() {
        setTimeout(async () => {
            props.navigation.navigate('Welcome')
            //setIsFirstLaunch(false)
        }, 500)
    }
    useEffect(() => {
        Timeout();
    }, [isFirstLaunch]);

    return (
        <View style={{ flex: 1 }} >
            <View style={styles.mainview}>
                <ImageBackground source={BACKGROUNDIMAGE} resizeMode="stretch" style={styles.image} >
                    <Image style={styles.logo} source={LOGO} />
                    <ActivityIndicator size="large" />
                </ImageBackground>
            </View>

        </View >
    )
}

export default Splash

const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        // backgroundColor: "red"
    },
    image: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        width: width,
        height: height
    },

    logo: {
        resizeMode: "center",
        // width: 225,
        // height: 239,
        // marginBottom: 250,

    },
})
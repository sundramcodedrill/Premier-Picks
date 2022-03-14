import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

const SimpleButton = (props) => {
    let { buttonStyle, titleStyle, onPress, title, disableStatus } = props
    return (
        <TouchableOpacity
            style={[styles.button, buttonStyle]}
            onPress={onPress}
            disabled={disableStatus}
        >
            <Text adjustsFontSizeToFit={true} style={[styles.buttontitle, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}
export default SimpleButton

const styles = StyleSheet.create({

    button: {
        backgroundColor: "#4E21C9",
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        margin: 10,
        width: widthPercentageToDP('90%'),
        height: heightPercentageToDP('6%')
    },

    buttontitle: {
        color: "#FFFFFF", fontSize: 16, fontWeight: "bold", fontFamily: "Spartan-Regular"
    }
})



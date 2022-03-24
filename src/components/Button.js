import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { useEffect } from 'react'
const SimpleButton = (props) => {
    let { buttonStyle, titleStyle, onPress, title, disableStatus, color } = props
    //console.log(disableStatus)



    return (

        < TouchableOpacity
            style={[styles.button, buttonStyle, { backgroundColor: disableStatus ? "#1E1A2E" : "#4E21C9" }]}
            onPress={onPress}
            disabled={disableStatus ? disableStatus : false}

        >
            <Text adjustsFontSizeToFit={true} style={[styles.buttontitle, titleStyle]}>{title}</Text>
        </TouchableOpacity >
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
        margin: 8,
        borderRadius: 5,
        width: widthPercentageToDP('90%'),
        height: heightPercentageToDP('6%')
    },

    buttontitle: {
        color: "#FFFFFF", fontSize: 16, fontWeight: "bold", fontFamily: "Spartan-Regular"
    }
})



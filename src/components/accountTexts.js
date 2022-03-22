import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const AccountTexts = (props) => {
    const { text, linkText, screenName } = props
    return (
        <Text style={
            [styles.textStyle, { fontFamily: "Spartan-Medium", color: "#717990" }]
        }>
            {text}
            <Text style={[styles.textStyle, { color: "#FFB700" }]} onPress={() => { props.onPress() }}>
                {linkText}
            </Text>
        </Text>
    )
}

export default AccountTexts

const styles = StyleSheet.create({
    textStyle: {
        justifyContent: "center",
        textAlign: "center",
    }
})
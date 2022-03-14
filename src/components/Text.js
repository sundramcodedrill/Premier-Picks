import { StyleSheet, View } from 'react-native'
import React from 'react'

const TextLogin = (props) => {
    let [TextString] = props
    return (

        <Text style={styles.textStyle}>{TextString}</Text>
    )
}

export default TextLogin

const styles = StyleSheet.create({
    textStyle: {
        width: 400,
        color: "#fff",
        textAlign: "center",
        fontFamily: "Rubik-Medium",
        fontStyle: "normal",
        fontSize: 28,
        fontWeight: 'normal'
    },
})
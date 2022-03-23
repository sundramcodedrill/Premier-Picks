import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import React, { useState } from 'react'

import { Show, Hide } from '../assets/Images'
const InputBox = (props) => {
    // { }


    const { inputTitle, disableOrNot, icon, customStyle, customTextInputStyle, secureText, showHideprop } = props
    const [showHide, setShowHide] = useState(false)
    const [data, setData] = useState("")
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View style={[styles.container, customStyle]}>
            <View style={{ alignItems: "center", marginLeft: 8, }}>
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <TextInput
                        style={[styles.textInputStyle, customTextInputStyle, isFocused && { borderColor: "#4E21C9", color: "red" }]}
                        keyboardAppearance="dark"
                        secureTextEntry={inputTitle == "Password" || inputTitle == "Confirm Password" ? showHide : false}
                        value={data}
                        selectionColor={'#4E21C9'}
                        onChangeText={(data) => { setData(data) }}
                        onFocus={() => {
                            setIsFocused(true)
                        }}
                        onBlur={() => { setIsFocused(false) }}
                    />
                    {inputTitle == "Password" || inputTitle == "Confirm Password" ?

                        <TouchableOpacity onPress={() => setShowHide(!showHide)}
                            style={{ padding: 10, position: 'absolute', right: 20, zIndex: 1 }}
                        >
                            <Image style={{}} source={showHide ? Hide : Show} resizeMode='contain' />
                        </TouchableOpacity> : null
                    }
                </View>

            </View>
            <View style={{ position: "absolute", top: -14, left: wp("8%"), }}>
                <Text style={{ backgroundColor: "#070417", opacity: 5, color: "#707C8B", padding: 5 }}>{inputTitle}</Text>
            </View>
        </View >
    )
}

export default InputBox

const styles = StyleSheet.create({
    container: {
        marginTop: 10, padding: 5,
    },
    textInputStyle: {

        width: wp("90%"),
        borderColor: "#707C8B",
        padding: 15,
        color: "#707C8B",
        marginLeft: 10,
        marginRight: 10,
        // backgroundColor: "#070417",
        borderRadius: 20,
        borderWidth: 1,
    }
})
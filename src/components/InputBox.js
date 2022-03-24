import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import React, { useEffect, useState } from 'react'

import { Show, Hide } from '../assets/Images'
const InputBox = (props) => {
    // { }


    const { inputTitle, customStyle, customTextInputStyle, secureText, onChange, showHideprop, value, keyboardType } = props
    const [showHide, setShowHide] = useState(false)

    const [isFocused, setIsFocused] = useState(false);

    const [data, setdata] = useState('')

    // const { inputTitle, disableOrNot, icon, customStyle, customTextInputStyle, secureText, showHideprop } = props
    // const [showHide, setShowHide] = useState(true)
    // const [data, setData] = useState("")
    // const [isFocused, setIsFocused] = useState(false);
    //useEffect(() => { }, [value])
    //console.log(value.length > 5)
    return (
        <View style={[styles.container, customStyle]}>
            <View style={{ alignItems: "center", marginLeft: 8, }}>
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <TextInput

                        style={[styles.textInputStyle, customTextInputStyle, isFocused && { borderColor: "#4E21C9", color: "#ffff" }]}
                        keyboardAppearance="dark"
                        secureTextEntry={inputTitle == "Password" || inputTitle == "Confirm Password" ? showHide : false}
                        value={value}
                        selectionColor={'#4E21C9'}
                        onChangeText={onChange}
                        onFocus={() => {
                            setIsFocused(true)
                        }}
                        keyboardType={keyboardType ? 'numeric' : 'default'}
                        onBlur={() => { setIsFocused(false) }}
                    />
                    {(inputTitle == "Password" || inputTitle == "Confirm Password") && value.length >= 1 ?

                        <TouchableOpacity onPress={() => setShowHide(!showHide)}
                            style={{ padding: 10, position: 'absolute', right: 20, zIndex: 1 }}
                        >
                            <Image source={(showHide) ? Hide : Show} resizeMode='contain' />
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
import { StyleSheet, View, TextInput, Text } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import React, { useState } from 'react'



const InputBox = (props) => {
    // { }
    const { inputTitle, disableOrNot, icon } = props
    const [data, setData] = useState("")
    return (
        <View style={{ marginTop: 10, padding: 5, }}>
            <View style={{ alignItems: "center", marginLeft: 8 }}>
                <TextInput
                    style={{ width: wp("90%"), borderColor: "#707C8B", padding: 15, color: "#707C8B", marginLeft: 10, marginRight: 10, backgroundColor: "#070417", borderRadius: 20, borderWidth: 1 }}
                    value={data}
                    onChangeText={(data) => { setData(data) }}
                />
            </View>
            <View style={{ position: "absolute", top: -14, left: wp("8%"), }}>
                <Text style={{ backgroundColor: "#070417", color: "#707C8B", padding: 5 }}>{inputTitle}</Text>
            </View>
            {icon ? <View>

            </View> : null}
        </View >
    )
}

export default InputBox

const styles = StyleSheet.create({})
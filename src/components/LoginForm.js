import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { InputBox } from './InputBox'
import { SimpleButton } from './Button'

const LoginForm = () => {
    return (
        <View>
            <InputBox inputTitle={"Username/Email"} />
            <InputBox inputTitle={"Password"} />
            <Text></Text>
            <Text style={[styles.textStyle, { fontSize: 10, color: "#FFB700", marginTop: 10 }]} > Forget Password</Text>
            <Text></Text>
            <SimpleButton
                buttonStyle={[styles.simpleButton]}
                titleStyle={[styles.buttonTitle]}
                onPress={() => { console.log("Hello") }} title="Login"
            />

            <SimpleButton
                buttonStyle={[styles.simpleButton]}
                titleStyle={[styles.buttonTitle]}
                onPress={() => {
                    console.log("Hello")
                }}
            />
            <Text style={
                [styles.textStyle, { fontFamily: "Spartan-Medium", fontWeight: "700", color: "#717990" }]
            }>
                Dont Have an account ?
                <Text style={[styles.textStyle, { fontSize: 10, color: "#FFB700" }]} >
                    Register
                </Text>
            </Text>

        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({

    simpleButton: {
        marginTop: 10
    },
    buttonTitle: {
        color: "#ffff"
    },
    textInput: {
        marginLeft: 16,
        paddingHorizontal: 10,
        marginRight: 16,
        borderWidth: 2,
        borderRadius: 20,

    },
    textInputTitle: {
        position: 'absolute',
        top: 0,
        padding: 0,
        left: 50,
        backgroundColor: '#070417',
        color: 'white'
    },
})
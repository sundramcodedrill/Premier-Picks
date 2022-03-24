import { ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React from 'react'
import { BACKGROUNDIMAGE1 } from '../../assets/Images'
import InputBox from '../../components/InputBox'
import SimpleButton from '../../components/Button'
import Header from '../../components/Header'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useState, useEffect } from 'react'

const Login1 = (props) => {


    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [activeButton, setActiveButton] = useState(true)





    useEffect(() => {
        //console.log(login, typeof login, "<----length")
        if (login.length > 5 && password.length > 4) {
            setActiveButton(false)
        }
    }, [login, password])

    return (
        // <KeyboardAvoidingView style={{ flex: 1, }} keyboardVerticalOffset={50} >

        <KeyboardAvoidingView style={{ flex: 1, color: 'red' }}>
            <Header />
            <ScrollView >
                <View style={{ flex: 1 }}>
                    <ImageBackground source={BACKGROUNDIMAGE1} style={{ width: wp('100%'), height: hp('100%'), }}  >
                        <View style={{ marginTop: hp("14%"), }}>
                            <Text style={[styles.textStyle, { fontSize: 26, fontWeight: "500", margin: hp("5%") }]}>Login</Text>

                            <InputBox inputTitle={"Username/Email"} value={login} onChange={(data) => { setLogin(data) }} />

                            <InputBox
                                inputTitle={"Password"}
                                icon={<svg data-testid="DeleteIcon"></svg>}
                                onChange={(data) => { setPassword(data) }}
                                value={password}
                            />

                            <Text style={[styles.textStyle, { marginTop: 25, marginBottom: 15, fontSize: 14, color: "#FFB700", }]}  > Forget Password</Text>

                            <SimpleButton
                                // buttonStyle={{ backgroundColor: { color } }}
                                titleStyle={[styles.buttonTitle]}
                                onPress={() => { console.log("Hello") }} title="Login"
                                disableStatus={activeButton}
                            />
                            <SimpleButton
                                //buttonStyle={[styles.simpleButton]}
                                titleStyle={[styles.buttonTitle]}
                                onPress={() => {
                                    console.log("Hello")
                                }}
                                title="Login with face ID"
                                disableStatus={false}

                            />
                            <Text style={
                                [styles.textStyle, { fontFamily: "Spartan-Medium", color: "#717990" }]
                            }>
                                Dont Have an account ?
                                <Text style={[styles.textStyle, { color: "#FFB700" }]} onPress={() => {
                                    props.navigation.navigate("Register")
                                }} >
                                    Register
                                </Text>
                            </Text>
                            <View style={{ marginBottom: 500 }}>
                            </View>

                        </View>

                    </ImageBackground>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}

export default Login1

const styles = StyleSheet.create({

    textStyle: {
        textAlign: "center",
        fontFamily: "Rubik-Medium",
        fontStyle: "normal",
        fontWeight: 'normal',
        color: '#FFF',
        fontSize: 14,
        // marginTop: 100
    },


})
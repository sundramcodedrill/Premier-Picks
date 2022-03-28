import { ScrollView, StyleSheet, Text, Button, View, KeyboardAvoidingView, ImageBackground, Alert } from 'react-native'
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

    const validation = () => {
        let regexEmail = new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')
        let regexPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
        if (regexEmail.test(login) == true) {
            if (regexPassword.test(password) == true) {
                Alert.alert('Valid Password')
            } else {
                Alert.alert('Invalid Password ')
            }
        } else {
            Alert.alert('Invalid Email or Password ')
        }
    }

    useEffect(() => {
        //console.log(login, typeof login, "<----length")
        if (login.length > 5 && password.length > 4) {
            setActiveButton(false)
        }
    }, [login, password])

    return (
        // <KeyboardAvoidingView style={{ flex: 1, }} keyboardVerticalOffset={50} >

        <KeyboardAvoidingView style={{ flex: 1 }}>
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
                                onPress={(login, password) => { validation(login, password) }}
                                title="Login"
                                disableStatus={activeButton}
                            />
                            <SimpleButton
                                //buttonStyle={[styles.simpleButton]}
                                titleStyle={[styles.buttonTitle]}
                                onPress={() => { }}
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

                            <Button title='Back To List' style={styles.button} onPress={() => { props.navigation.navigate("RandomUserList") }} />
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
    button: {
        backgroundColor: "#4E21C9",
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        margin: 8,
        borderRadius: 5,
        width: wp('90%'),
        height: hp('6%')
    },

    buttontitle: {
        color: "#FFFFFF", fontSize: 16, fontWeight: "bold", fontFamily: "Spartan-Regular"
    }

})
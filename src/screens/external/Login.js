import { ScrollView, Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React from 'react'
import { BACKGROUNDIMAGE1, PPLogo } from '../../assets/Images/index'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InputBox from '../../components/InputBox'
import SimpleButton from '../../components/Button'
import Header from '../../components/Header'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Login1 = (props) => {

    console.log(props, "<------------Login Screen")
    return (

        // <KeyboardAvoidingView style={{ flex: 1, }} keyboardVerticalOffset={50} >

        <KeyboardAvoidingView styles={styles.container} behavior={Platform.OS === "ios" ? "padding" : null}><ScrollView >
            <Header />
            <View style={{ flex: 1 }}>
                <ImageBackground source={BACKGROUNDIMAGE1} style={{ width: wp('100%'), height: hp('100%'), }}  >
                    <View style={{ marginTop: hp("14%"), }}>
                        <Text style={[styles.textStyle, { fontSize: 26, fontWeight: "500", margin: hp("5%") }]}>Login</Text>

                        <InputBox inputTitle={"Username/Email"} />

                        <InputBox inputTitle={"Password"} />



                        <Text style={[styles.textStyle, { fontSize: 14, color: "#FFB700", marginTop: 10 }]}  > Forget Password</Text>
                        <Text></Text>
                        <SimpleButton
                            buttonStyle={[styles.simpleButton, {}]}
                            titleStyle={[styles.buttonTitle]}
                            onPress={() => { console.log("Hello") }} title="Login"
                            disableStatus={true}
                        />
                        <SimpleButton
                            buttonStyle={[styles.simpleButton]}
                            titleStyle={[styles.buttonTitle]}
                            onPress={() => {
                                console.log("Hello")
                            }}
                            title="Login with face ID"
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
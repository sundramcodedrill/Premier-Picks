import { ScrollView, StyleSheet, TouchableOpacity, TextInput, Text, View, KeyboardAvoidingView, ImageBackground, Image, Dimensions, Input, FormInput } from 'react-native'
// import { Header, SimpleButton, InputBox } from '../../components'
import { Header, SimpleButton, InputBox, AccountTexts } from '../../components/Index'
import { RegisterBackground, Progress, Vector } from '../../assets/Images/index'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const RegisterTwo = (props) => {

    const [data, setData] = useState("")
    const [borderColorHook, setBorderColorHook] = useState("#ff0011")
    return (
        // Main View Started


        <ImageBackground source={RegisterBackground} style={{ width: wp("100%"), height: Dimensions.get('window').height }} >

            <Header />


            <KeyboardAwareScrollView keyboardShouldPersistTaps={'handled'} onKeyboardWillShow={(Object) => {
                console.log('Keyboard event', frames)
            }}>
                <ScrollView style={{ flex: 1 }}>
                    {/* Registeration Title View */}
                    <View style={{ margin: 15, }}>
                        <Text style={[styles.textStyle, { fontSize: 28, fontWeight: "500", fontFamily: "Rubik-Medium" }]}>Register</Text>
                        <Text style={[styles.textStyle, { fontFamily: "Rubik-Regular", fontSize: 14, fontWeight: "100", }]}>Enter all details below to create your account</Text>
                    </View>

                    {/* Registeration Title View Closed */}

                    <View style={{ flex: 1, marginTop: hp("5%"), flexDirection: "row", justifyContent: "center", }}>
                        <View style={{ flexDirection: "row", }}>
                            <Text style={styles.stepStyle}> 1 </Text>
                            {/* RoundCheck  "#717990"  #00C467*/}
                            <View style={{
                                width: 16, height: 16, backgroundColor: "#00C467", justifyContent: "center", alignItems: "center", position: "absolute", left: wp("7 % "), top: hp("0.5% "), borderRadius: 8
                            }}>
                                <Image source={Vector} style={{ width: 10, height: 10, }} />
                            </View>
                            {/* RoundCheck CLOSED */}

                            {/* Progress Ion + 2 Text */}
                            <Image source={Progress} style={{ marginTop: 20, marginLeft: 8, marginRight: 8 }} />
                            <Text style={[styles.stepStyle, { color: "#231D43", borderColor: "#231D43" }]}>2</Text>

                            {/* Progress Ion + 2 Text  CLOSED*/}
                        </View>
                    </View>


                    {/* Address Details */}
                    <View style={{ marginTop: hp("5%"), flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={[styles.textStyle, { fontSize: 16, fontWeight: "500", fontFamily: "Rubik-Medium", marginLeft: 16, marginBottom: 20, marginTop: 20 }]}>Address</Text>
                        <TouchableOpacity onPress={() => (props.navigation.navigate("Register"))}>
                            <Text style={[styles.textStyle, { textAlign: "right", fontSize: 10, fontWeight: "500", fontFamily: "Spartan-Medium", marginLeft: 16, marginRight: 16, color: "#FFB700", marginBottom: 20, marginTop: 20 }]}>Back to Step1</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Address Closed */}

                    {/* Form Started */}


                    {/* Input Box First Name*/}
                    <View style={{ marginBottom: 10 }}>
                        <InputBox inputTitle="First Name" />
                    </View>
                    {/* Input Box  CLOSED Here*/}

                    {/* Input Box Last Name*/}
                    <View style={{ marginBottom: 10 }}>
                        <InputBox inputTitle="Last Name" />
                    </View>
                    {/* Input Box Last Name CLOSED Here*/}


                    {/* Input Box UserName*/}
                    <View style={{ marginBottom: 10, justifyContent: "center", alignItems: "center" }}>
                        <InputBox inputTitle="User Name" />
                    </View>
                    {/* Input Box UserName CLOSED Here*/}


                    {/* DOB */}
                    <View style={{ marginLeft: 16, marginBottom: 10 }}>
                        <Text style={[styles.textStyle, { fontSize: 16, fontWeight: "500", fontFamily: "Rubik-Medium" }]}>DOB</Text>
                    </View>

                    <View style={{ flexDirection: "row", marginLeft: 10, marginBottom: 10 }}>
                        <InputBox inputTitle="DD" customTextInputStyle={{
                            width: wp("26%"), marginRight: 0, marginLeft: 0
                        }} />
                        <InputBox inputTitle="MM" customTextInputStyle={{ width: wp("26%"), marginLeft: 0, marginRight: 0 }} />
                        <InputBox inputTitle="YY/YY" customTextInputStyle={{ width: wp("29%"), marginLeft: 0, marginRight: 0 }} />
                    </View>

                    <View style={{ marginBottom: 10, justifyContent: "center", alignItems: "center" }}>
                        <InputBox inputTitle="Password" />
                    </View>

                    < View style={{ marginBottom: 10, justifyContent: "center", alignItems: "center" }}>
                        <InputBox inputTitle="Confirm Password" secureText={true} />
                    </View>

                    {/* Next Step */}

                    < SimpleButton title="Next Step" />

                    {/* Next Step CLOSE */}



                    < AccountTexts text="Already have account? " linkText="Sign In" screenName="Login" onPress={() => {
                        props.navigation.navigate('Login')
                    }} />

                    <View style={{ marginBottom: 250 }}>
                    </View>

                </ScrollView >
            </KeyboardAwareScrollView >
        </ImageBackground >

    )
}

export default RegisterTwo

const styles = StyleSheet.create({

    textStyle: {
        color: "#ffffff",
        fontFamily: "Rubik-Light"
    },
    stepStyle: {
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 40 / 2,
        width: 40,
        height: 40,
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        padding: 8,
        color: "#fff", fontSize: 16
    },

    textStyle2: {
        textAlign: "center",
        fontFamily: "Rubik-Medium",
        fontStyle: "normal",
        fontWeight: 'normal',
        color: '#FFF',
        fontSize: 14,
        // marginTop: 100
    },
    View2: {
        flex: 1
    },

    View4: {},
    imageBackground: {
        width: wp('100%'), height: hp('100%')
    },
    firstName: {
        width: wp("90%"), borderColor: "#707C8B", padding: 15, color: "#707C8B", marginLeft: 0, backgroundColor: "#070417", borderRadius: 20, borderWidth: 1
    }
})
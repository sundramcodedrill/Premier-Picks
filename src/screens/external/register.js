import { ScrollView, StyleSheet, TextInput, Text, View, KeyboardAvoidingView, ImageBackground, Image, Dimensions, Input, FormInput } from 'react-native'
// import { Header, SimpleButton, InputBox } from '../../components'
import { Header, SimpleButton, InputBox, AccountTexts } from '../../components/Index'
import { RegisterBackground, Progress, Vector } from '../../assets/Images/index'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Register = (props) => {


    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [dd, setdd] = useState(0)
    const [mm, setmm] = useState(0)
    const [yyyy, setyyyy] = useState(0)
    const [Rpassword, setRpassword] = useState('')
    const [rConfirmPassword, setrConfirmPassword] = useState('')
    const [ractiveButton, setrActiveButton] = useState(true)

    //&& lastname.length > 0 && username.length > 0 && email.length > 0 && dd > 0 && yyyy.toString() > 3 && mm > 0 && Rpassword > 0 && rConfirmPassword > 0
    // , lastname, username, email, dd, yyyy, mm, Rpassword, rConfirmPassword



    useEffect(() => {
        //console.log(login, typeof login, "<----length")
        if (rConfirmPassword.length > 0) {
            setrActiveButton(false)
        } else {
            setrActiveButton(true)
        }
    }, [rConfirmPassword])

    return (
        // Main View Started

        <View style={{ flex: 1 }}>
            <ImageBackground
                source={RegisterBackground}
            // style={{ width: Dimensions.get('window').width }}

            >

                <Header />

                <ScrollView>
                    <KeyboardAwareScrollView >

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
                                    width: 16, height: 16, backgroundColor: "#717990", justifyContent: "center", alignItems: "center", position: "absolute", left: wp("7%"), top: hp("0.5%"), borderRadius: 8
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


                        {/* Personal Details */}
                        <View style={{ marginTop: hp("5%") }}>
                            <Text style={[styles.textStyle, { fontSize: 16, fontWeight: "500", fontFamily: "Rubik-Medium", marginLeft: 16, marginBottom: 20, marginTop: 48 }]}>Personal Details</Text>
                        </View>
                        {/* Personal Details Closed */}

                        {/* Form Started */}


                        {/* Input Box First Name*/}
                        <View style={{ marginBottom: 10 }}>
                            <InputBox
                                inputTitle="First Name"
                                onChange={(data) => { setfirstname(data) }}
                                value={firstname}
                            />
                        </View>
                        {/* Input Box  CLOSED Here*/}

                        {/* Input Box Last Name*/}
                        <View style={{ marginBottom: 10 }}>
                            <InputBox
                                inputTitle="Last Name"
                                onChange={(data) => { setlastname(data) }}
                                value={lastname}
                            />
                        </View>
                        {/* Input Box Last Name CLOSED Here*/}



                        {/* Input Box UserName*/}
                        <View style={{ marginBottom: 10, justifyContent: "center", alignItems: "center" }}>
                            <InputBox
                                inputTitle="User Name"
                                onChange={(data) => { setusername(data) }}
                                value={username}
                            />
                        </View>
                        {/* Input Box UserName CLOSED Here*/}

                        {/*  */}

                        <View style={{ marginBottom: 10 }}>
                            <InputBox
                                inputTitle="Email"
                                onChange={(data) => { setemail(data) }}
                                value={email}
                            />
                        </View>

                        {/*  */}



                        {/* DOB */}
                        <View style={{ marginLeft: 16, marginBottom: 10 }}>
                            <Text style={[styles.textStyle, { fontSize: 16, fontWeight: "500", fontFamily: "Rubik-Medium" }]}>DOB</Text>
                        </View>

                        <View style={{ flexDirection: "row", marginLeft: 10, marginBottom: 10 }}>
                            <InputBox
                                inputTitle="DD"
                                keyboardType="numeric"
                                customTextInputStyle={{
                                    width: wp("26%"), marginRight: 0, marginLeft: 0
                                }}
                                onChange={(data) => { setdd(data) }}
                                value={dd}
                            />

                            <InputBox
                                inputTitle="MM"
                                keyboardType="numeric"
                                customTextInputStyle={{
                                    width: wp("26%"), marginLeft: 0, marginRight: 0
                                }}
                                onChange={(data) => { setmm(data) }}
                                value={mm}
                            />

                            <InputBox
                                inputTitle="YY/YY"
                                keyboardType="numeric"
                                customTextInputStyle={{
                                    width: wp("29%"), marginLeft: 0, marginRight: 0
                                }}
                                onChange={(data) => { setyyyy(data) }}
                                value={yyyy}
                            />
                        </View>

                        <View style={{ marginBottom: 10, justifyContent: "center", alignItems: "center" }}>
                            <InputBox
                                inputTitle="Password"
                                onChange={(data) => { setRpassword(data) }}
                                value={Rpassword}
                                secureText={false}
                            />
                        </View>

                        < View style={{ marginBottom: 10, justifyContent: "center", alignItems: "center" }}>
                            <InputBox
                                inputTitle="Confirm Password"
                                onChange={(data) => { setrConfirmPassword(data) }}
                                value={rConfirmPassword}
                                secureText={false} />
                        </View>

                        {/* Next Step */}

                        < SimpleButton
                            title="Next Step"
                            onPress={() => (props.navigation.navigate("RegisterStep2"))}
                            disableStatus={ractiveButton}
                        />

                        {/* Next Step CLOSE */}



                        < AccountTexts text="Already have account? " linkText="Sign In" screenName="Login" onPress={() => {
                            props.navigation.navigate('Login')
                        }} />

                        <View style={{ marginBottom: 450 }}>
                        </View>



                    </KeyboardAwareScrollView >
                </ScrollView>
            </ImageBackground >
        </View >
    )
}

export default Register

const styles = StyleSheet.create({

    textStyle: {
        color: "#ffffff",
        fontFamily: "Rubik-Light"
    },
    stepStyle: {
        borderWidth: 2,
        borderColor: "#717990",
        borderRadius: 40 / 2,
        width: 40,
        height: 40,
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        padding: 8,
        color: "#717990", fontSize: 16, borderColor: "#717990",
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
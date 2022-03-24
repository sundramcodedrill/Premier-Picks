import { ScrollView, StyleSheet, TouchableOpacity, TextInput, Text, View, KeyboardAvoidingView, ImageBackground, Image, Dimensions, Input, FormInput } from 'react-native'
import { Header, SimpleButton, InputBox, AccountTexts } from '../../components/Index'
import { RegisterBackground, Progress, Vector } from '../../assets/Images/index'
import React, { useEffect, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CheckBox from '@react-native-community/checkbox';
// import { Checkbox } from 'react-native-paper';

const RegisterTwo = (props) => {

    // const [data, setData] = useState("")
    // const [checked, setChecked] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [HouseNumber, setHouseNumber] = useState("")
    const [Street, setStreet] = useState("")
    const [Town, setTown] = useState("")
    const [PostalCode, setPostalCode] = useState("")
    const [Region, setRegion] = useState("")
    const [registerButton, setregisterButton] = useState(true)
    const [r2Button, setr2Button] = useState(true)

    useEffect(() => {

        if (toggleCheckBox == true) {
            setr2Button(false)
        }

    }, [toggleCheckBox])

    console.log(toggleCheckBox, '---------------->checkBox value')

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


                    { /* House Number*/}
                    <View style={{ marginBottom: 10 }}>
                        <InputBox
                            inputTitle="*House Number"
                            value={HouseNumber}
                            onChange={(data) => { setHouseNumber(data) }}
                        />
                    </View>
                    {/* Input Box *House Number CLOSED Here*/}

                    {/* Input Box Street Name*/}
                    <View style={{ marginBottom: 10 }}>
                        <InputBox
                            inputTitle="*Street"
                            value={Street}
                            onChange={(data) => { setStreet(data) }}
                        />
                    </View>
                    {/* Input Box Street CLOSED Here*/}

                    {/* Town */}
                    <View style={{ marginBottom: 10, justifyContent: "center", alignItems: "center" }}>
                        <InputBox
                            inputTitle="*Town"
                            value={Town}
                            onChange={(data) => { setTown(data) }}
                        />
                    </View>

                    {/* TownClosed */}


                    {/* Input Box PostCode*/}
                    <View style={{ marginBottom: 10, justifyContent: "center", alignItems: "center" }}>
                        <InputBox
                            inputTitle="*Post Code"
                            value={PostalCode}
                            onChange={(data) => { setPostalCode(data) }}
                        />
                    </View>
                    {/* Input Box PostCode CLOSED Here*/}


                    {/* Input Box Region*/}
                    <View style={{ marginBottom: 10, justifyContent: "center", alignItems: "center" }}>
                        <InputBox
                            inputTitle="*Region"
                            value={Region}
                            onChange={(data) => { setRegion(data) }}
                        />
                    </View>
                    {/* Input Box Region CLOSED Here*/}


                    {/* Terms and Conditions */}


                    <View style={{ flexDirection: "row", alignContent: "center", alignItems: "center" }}>
                        {/* <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            // status={'indeterminate}
                            uncheckedColor={"#717990"}
                            color={checked ? "#4E21C9" : '#fff'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                            theme={{}}
                        /> */}

                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            tintColors={{ true: "#717990", false: "#717990" }}
                            style={{ marginLeft: 20 }}
                        />
                        {/* onCheckColor */}
                        <Text style={{ color: "#717990", fontSize: 12, fontFamily: "Rubik-Regular" }}>
                            I agree to the T&Cs and confirm I am over the age of 18
                        </Text>
                    </View>


                    {/* Terms and Conditions */}

                    {/* Next Step */}

                    < SimpleButton
                        title="Register"
                        disableStatus={!toggleCheckBox}
                    />

                    {/* Next Step CLOSE */}



                    < AccountTexts text="Already have account? " linkText="Sign In" screenName="Login" onPress={() => {
                        props.navigation.navigate('Login')
                    }} />

                    <View style={{ marginBottom: 350 }}>
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
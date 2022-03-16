import { ScrollView, StyleSheet, TextInput, Text, View, KeyboardAvoidingView, ImageBackground, Image } from 'react-native'
import { Header, SimpleButton, } from '../../components'
import { RegisterBackground, Progress, Vector } from '../../assets/Images/index'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { borderColor, style } from '@mui/system'


const Register = (props) => {

    const [data, setData] = useState("")

    const [borderColorHook, setBorderColorHook] = useState("#ff0011")
    return (
        // Main View Started

        <KeyboardAvoidingView style={{ flex: 1 }}>
            <Header />
            <ScrollView style={{ flex: 1, }} >
                <ImageBackground source={RegisterBackground} style={{ width: wp("100%"), height: hp("100%") }} >
                    <View style={{ margin: 15 }}>
                        <Text style={[styles.textStyle, { fontSize: 28, fontWeight: "500", fontFamily: "Rubik-Medium" }]}>Register</Text>
                        <Text style={[styles.textStyle, { fontFamily: "Rubik-Regular", fontSize: 14, fontWeight: "100", }]}>Enter all details below to create your account</Text>
                    </View>

                    {/* Registeration Title View Closed */}

                    <View style={{ flex: 0.2, marginTop: hp("8%"), flexDirection: "row", justifyContent: "center", }}>
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

                    {/* Form Started */}
                    <View style={{ flex: 1 }}>

                        {/* Personal Details */}

                        <Text style={[styles.textStyle, { fontSize: 16, fontWeight: "500", fontFamily: "Rubik-Medium", marginLeft: 16, marginBottom: 30 }]}>Personal Details</Text>

                        {/* Personal Details Closed */}


                        {/* Input Box First Name*/}
                        <View style={{ marginTop: 10, padding: 0, marginBottom: 10 }}>
                            <View style={{ marginLeft: 16 }}>
                                <TextInput
                                    style={[styles.firstName, { borderColor: "#707C8B" }]}
                                    value={data}
                                    onChangeText={(data) => { setData(data); }}
                                    onFocus={() => {
                                        setBorderColorHook("#4E21C9")
                                    }}
                                />
                            </View>
                            <View style={{ position: "absolute", top: -20, left: wp("8%"), }}>
                                <Text style={{ backgroundColor: "#070417", color: "#707C8B", padding: 5 }}>*First Name</Text>
                            </View>

                        </View >
                        {/* Input Box  CLOSED Here*/}

                        {/* Input Box Last Name*/}
                        <View style={{ marginTop: 10, padding: 0, marginBottom: 10 }}>
                            <View style={{ marginLeft: 16 }}>
                                <TextInput
                                    style={[styles.firstName, { borderColor: "#707C8B" }]}
                                    value={data}
                                    onChangeText={(data) => { setData(data) }}
                                    onFocus={() => {
                                        setBorderColorHook(true)
                                    }}
                                    onBlur={() => { }}
                                />
                            </View>
                            <View style={{ position: "absolute", top: -20, left: wp("8%"), }}>
                                <Text style={{ backgroundColor: "#070417", color: "#707C8B", padding: 5 }}>*Last Name Name</Text>
                            </View>

                        </View >
                        {/* Input Box Last Name CLOSED Here*/}


                        {/* Input Box UserName*/}
                        <View style={{ marginTop: 10, padding: 0, marginBottom: 10 }}>
                            <View style={{ marginLeft: 16 }}>
                                <TextInput
                                    style={[styles.firstName, { borderColor: "#707C8B" }]}
                                    value={data}
                                    onChangeText={(data) => { setData(data) }}
                                    onFocus={() => {
                                        setBorderColorHook(true)
                                    }}
                                    onBlur={() => { }}
                                />
                            </View>
                            <View style={{ position: "absolute", top: -20, left: wp("8%"), }}>
                                <Text style={{ backgroundColor: "#070417", color: "#707C8B", padding: 5 }}>*Username</Text>
                            </View>

                        </View >
                        {/* Input Box UserName CLOSED Here*/}


                        {/* DOB */}

                        <Text style={[styles.textStyle, { fontSize: 16, fontWeight: "500", fontFamily: "Rubik-Medium", marginLeft: 16, marginBottom: 10 }]}>DOB</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 16, marginRight: 25 }}>
                            {/* DD */}
                            <View style={{ marginTop: 10, padding: 0, marginBottom: 10 }}>
                                <View style={{}}>
                                    <TextInput
                                        style={[styles.firstName, { borderColor: "#707C8B", width: wp("25%") }]}
                                        value={data}
                                        onChangeText={(data) => { setData(data) }}
                                        onFocus={() => {
                                            setBorderColorHook(true)
                                        }}
                                        onBlur={() => { }}
                                    />
                                </View>
                                <View style={{ position: "absolute", top: -20, left: wp("4%"), }}>
                                    <Text style={{ backgroundColor: "#070417", color: "#707C8B", padding: 5 }}>DD</Text>
                                </View>

                            </View >
                            {/* DDCLOSE */}

                            {/* MM */}
                            <View style={{ marginTop: 10, padding: 0, marginBottom: 10 }}>
                                <View style={{}}>
                                    <TextInput
                                        style={[styles.firstName, { borderColor: "#707C8B", width: wp("27%") }]}
                                        value={data}
                                        onChangeText={(data) => { setData(data) }}
                                        onFocus={() => {
                                            setBorderColorHook(true)
                                        }}
                                        onBlur={() => { }}
                                    />
                                </View>
                                <View style={{ position: "absolute", top: -20, left: wp("4%"), }}>
                                    <Text style={{ backgroundColor: "#070417", color: "#707C8B", padding: 5 }}>MM</Text>
                                </View>

                            </View >
                            {/* MMCLOSE */}

                            {/* YY/YY */}
                            <View style={{ marginTop: 10, padding: 0, marginBottom: 10 }}>
                                <View style={{}}>
                                    <TextInput
                                        style={[styles.firstName, { borderColor: "#707C8B", width: wp("28%") }]}
                                        value={data}
                                        onChangeText={(data) => { setData(data) }}
                                        onFocus={() => {
                                            setBorderColorHook(true)
                                        }}
                                        onBlur={() => { }}
                                    />
                                </View>
                                <View style={{ position: "absolute", top: -20, left: wp("4%"), }}>
                                    <Text style={{ backgroundColor: "#070417", color: "#707C8B", padding: 5 }}>YY/YY</Text>
                                </View>

                            </View >
                            {/* YY/YY */}
                        </View>
                        {/* DOB CLOSE */}

                        {/* Next Step */}
                        <SimpleButton title="Next Step" />

                        {/* Next Step CLOSE */}




                    </View>



                    <Text style={
                        [styles.textStyle2, { fontFamily: "Spartan-Medium", color: "#717990", marginTop: hp("15%"), }]
                    }>
                        Already Have an account ?
                        <Text style={[styles.textStyle, { color: "#FFB700" }]} onPress={() => {
                            props.navigation.navigate("Sign In")
                        }} >
                            Register
                        </Text>
                    </Text>
                </ImageBackground>
            </ScrollView >
            {/*Main View Ended */}
        </KeyboardAvoidingView >


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
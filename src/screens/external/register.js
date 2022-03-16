import { ScrollView, StyleSheet, TextInput, Text, View, KeyboardAvoidingView, ImageBackground, Image, Dimensions } from 'react-native'
import { Header, SimpleButton, InputBox } from '../../components'
import { RegisterBackground, Progress, Vector } from '../../assets/Images/index'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { borderColor, style } from '@mui/system'


const Register = (props) => {

    const [data, setData] = useState("")

    const [borderColorHook, setBorderColorHook] = useState("#ff0011")
    return (
        // Main View Started


        <ImageBackground source={RegisterBackground} style={{ width: wp("100%"), height: Dimensions.get('window').height }} >

            <Header />
            <ScrollView style={{ flex: 1, }} >

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

                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                    <InputBox inputTitle="DD" customTextInputStyle={{
                        width: wp("26%"), marginRight: 0, marginLeft: 0
                    }} />
                    <InputBox inputTitle="MM" customTextInputStyle={{ width: wp("26%"), marginLeft: 0, marginRight: 0 }} />
                    <InputBox inputTitle="YY/YY" customTextInputStyle={{ width: wp("29%"), marginLeft: 0, marginRight: 0 }} />
                </View>

                <View style={{ marginBottom: 10, justifyContent: "center", alignItems: "center" }}>
                    <InputBox inputTitle="Pssassword" />
                </View>

                <View style={{ marginBottom: 10, justifyContent: "center", alignItems: "center" }}>
                    <InputBox inputTitle="Confirmssassword" />
                </View>

                {/* Next Step */}



                {/* Next Step CLOSE */}









            </ScrollView >
        </ImageBackground>




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
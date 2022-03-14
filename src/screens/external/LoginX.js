import { TextInput, KeyboardAvoidingView, StatusBar, ScrollView, StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

import { BACKGROUNDIMAGE1, PPLogo } from '../../assets/Images/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import LinearGradient from 'react-native-linear-gradient';
import { color } from 'react-native-reanimated';
import InputBox from '../../components/InputBox'
import SimpleButton from '../../components/Button'
// import { TextInput } from 'react-native-paper'
const Login1X = () => {
    const [text, setText] = React.useState("");

    return (

        <ScrollView behavior={Platform.OS === "android" ? "padding" : "height"} style={{ flex: 1, backgroundColor: "#070417" }} >

            < StatusBar backgroundColor="#070417" />
            <View style={{ height: hp('8%'), width: wp('100%'), backgroundColor: "#070417", justifyContent: "center" }}>
                <Image source={PPLogo} style={{ margin: 10 }}></Image>
            </View>

            <ImageBackground source={BACKGROUNDIMAGE1} style={{ width: wp('100%'), height: hp('30%'), justifyContent: "center" }} >
                {/* {'#3b5998', '#192f6a'} */}


                <LinearGradient
                    start={{ x: 0.0, y: 1.0 }}
                    end={{ x: 0.0, y: 0.0 }}
                    locations={[0.8, 0.8, 1.0]}

                    // co++lors={['rgba(253,0,23,0.5)', 'rgba(7,253,23,0.5)', 'rgba(7,4,235,0.5)']}

                    colors={['rgba(7,4,23,0.5)', 'rgba(7,4,23,0.5)', 'rgba(7,4,23,0.5)']}
                    style={styles.linearGradient}>

                </LinearGradient>
            </ImageBackground>



        </ScrollView >


    )
}

export default Login1X

const styles = StyleSheet.create({

    imageBackground: {
        flex: 1
    },

    linearGradient: {
        flex: 1,

    }

});
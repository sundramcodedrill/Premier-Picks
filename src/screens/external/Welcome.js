import { StyleSheet, TouchableOpacity, Text, View, ImageBackground, Image, Button, Dimensions } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SimpleButton from '../../components/Button';
import { BACKGROUNDIMAGE, LOGO } from '../../assets/Images/index'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
// import { Navigation } from '../../navigation';
import { Login } from './login'
import navigation from '../../navigation/navigation';

const Stack = createStackNavigator()
const { width, height } = Dimensions.get("screen")
const Welcome = (props) => {

    console.log(props, "<------------Login Screen")
    return (
        <View style={styles.mainview}>

            <ImageBackground source={BACKGROUNDIMAGE} resizeMode="stretch" style={styles.image} >

                <Image style={[styles.logo, { justifyContent: "center", alignItems: "center", marginTop: heightPercentageToDP("10%") }]} source={LOGO} />
                <View style={{ width: widthPercentageToDP("100%"), height: heightPercentageToDP("18%"), margin: 20 }}>
                    <Text style={styles.textStyle}>{`Can you be the last \none standing?`}</Text>
                    <Text style={[styles.textStyle, { fontSize: 16 }]}>
                        {`Join now and play against your mates\nand other Premier Picks Players\nto scoop the prize pot`}</Text>
                </View>
                <SimpleButton
                    buttonStyle={[styles.simpleButton]}
                    titleStyle={[styles.buttonTitle]}
                    onPress={() => {
                        // console.log(props, "<---propssss")
                        props.navigation.navigate('Login');
                    }}
                    title="Login"
                />
                <SimpleButton
                    buttonStyle={[styles.simpleButton]}
                    titleStyle={[styles.buttonTitle]}
                    onPress={() => {
                        console.log("Hello")
                    }} title="Create an account"
                />
            </ImageBackground >
        </View >
    )
}

export default Welcome

const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        flex: 1,
        alignItems: "center",
        width: width,
        height: height
    },
    logo: {

        width: 225,
        height: 239,

    },
    textStyle: {
        // width: 400,

        color: "#fff",
        textAlign: "center",
        fontFamily: "Rubik-Medium",
        fontStyle: "normal",
        fontSize: 28,
        fontWeight: 'normal'
    },
    simpleButton: {
        marginTop: 10
    },
    buttonTitle: {
        color: "#ffff"
    }

})
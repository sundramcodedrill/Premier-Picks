import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { PPLogo } from '../assets/Images/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const Header = () => {
    return (
        <View style={{ height: hp('8%'), width: wp('100%'), backgroundColor: "#070417", justifyContent: "center" }}>
            <Image source={PPLogo} style={{ margin: 10 }}></Image>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})
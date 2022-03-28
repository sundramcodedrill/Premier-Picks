import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'

const MovieDetails = ({ route: { params } }) => {
    console.log("params------------------>", params)

    const { imageUser, userName } = params
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <Image source={{ uri: imageUser }} style={{
                height: 400, width: 400, borderRadius: 500
            }} />
            <Text style={{ fontSize: 28 }}>
                {userName}
            </Text>
        </View>
    )
}

export default MovieDetails

const styles = StyleSheet.create({})
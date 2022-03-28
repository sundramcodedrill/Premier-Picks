import { ScrollView, ActivityIndicator, StyleSheet, Button, Image, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SimpleButton from '../../components/Button'
import { BACKGROUNDIMAGE1 } from '../../assets/Images'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

const RandomUserList = (props) => {

    const [refreshing, setRefreshing] = React.useState(false);


    const Item = ({ item, onPress, textColor }) => (
        <ScrollView >
            <TouchableOpacity fullImage={item.picture.large} onPress={() => { props.navigation.navigate("MovieDetails", { imageUser: item.picture.large, userName: item.name.first }) }} style={{ backgroundColor: "#4E61C9", padding: 10, borderColor: "black", borderWidth: 0.5, margin: 15 }}>
                <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                    <Image
                        style={{
                            width: 75,
                            height: 75,
                        }}
                        source={{
                            uri: item.picture.thumbnail,
                        }}
                    />
                    <View>
                        <Text style={{ color: "white" }}>    {item.name.first}</Text>
                        <Text style={{ color: "white" }}>    {item.gender}</Text>
                        <Text style={{ color: "white" }}>    {item.email}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        </ScrollView>

    );


    const handleRefresh = () => {
        getApiData();
    }

    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                // onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />

        );
    };




    const [resp, setResp] = useState(null);
    const [details, setdetails] = useState(null);
    const myfav = []

    useEffect(() => {
        getApiData();
    }, [])




    async function getApiData() {
        setRefreshing(true)
        await axios.get("https://randomuser.me/api/?results=20")
            .then((response) => {
                let str = (response.data.results)
                setResp(str)
                console.log(str)
                setRefreshing(false);
            })
            .catch((error) => {
                console.error(`Error------->${error}`)
                setRefreshing(true);
            }
            )
    }

    return (
        <View style={{ flex: 1, }}>
            {/* <ImageBackground source={BACKGROUNDIMAGE1} style={{ justifyContent: "flex-start", width: wp('100%'), height: hp('100%'), }}> */}

            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ margin: 10, fontSize: 20, backgroundColor: "#fff" }}>Fetching Data Using Axios</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
                {
                    refreshing ? <ActivityIndicator size={40} /> : <FlatList
                        data={resp}
                        renderItem={renderItem}
                        keyExtractor={item => item.login.uuid}
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                    //refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    />
                }

            </View>


            <SimpleButton title="Back To Login" onPress={() => (
                props.navigation.navigate("Login"))} />

            {/* </ImageBackground> */}
        </View>
    )
}

export default RandomUserList

const styles = StyleSheet.create({

    button: {
        backgroundColor: "#4E21C9",
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        margin: 8,
        borderRadius: 5,
        width: widthPercentageToDP('90%'),
        height: heightPercentageToDP('6%')
    },

    buttontitle: {
        color: "#FFFFFF", fontSize: 16, fontWeight: "bold", fontFamily: "Spartan-Regular"
    }
})
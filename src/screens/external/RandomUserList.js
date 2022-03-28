import { StyleSheet, Button, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SimpleButton from '../../components/Button'
import { BACKGROUNDIMAGE1 } from '../../assets/Images'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

const RandomUserList = (props) => {


    // const DATA = [
    //     {
    //         id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    //         title: "First Item",
    //     },
    //     {
    //         id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    //         title: "Second Item",
    //     },
    //     {
    //         id: "58694a0f-3da1-471f-bd96-145571e29d72",
    //         title: "Third Item",
    //     },
    // ];

    const Item = ({ item, onPress, textColor }) => (
        <TouchableOpacity onPress={onPress} style={{ backgroundColor: "#4E61C9", padding: 10, borderColor: "black", borderWidth: 2, margin: 15 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ color: "white" }}>{item.id}</Text>
                <Text style={{ color: "white" }}>{item.title}</Text>
                <Text style={{ color: "white" }}>{item.releaseYear}</Text>
            </View>
        </TouchableOpacity>
    );


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
        await axios.get("https://reactnative.dev/movies.json")
            .then((response) => {
                let str = (response.data.movies)
                setResp(str)
                console.log(str)
            })
            .catch(error => console.error(`Error------->${error}`))
    }

    return (
        <View style={{ flex: 1, }}>
            {/* <ImageBackground source={BACKGROUNDIMAGE1} style={{ justifyContent: "flex-start", width: wp('100%'), height: hp('100%'), }}> */}

            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ margin: 10, fontSize: 20, backgroundColor: "#fff" }}>Fetching Data Using Axios</Text>
            </View>

            <FlatList
                data={resp}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            
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
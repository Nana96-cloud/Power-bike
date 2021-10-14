import React from "react";
import {StyleSheet, View, Text, TouchableOpacity, SectionList } from "react-native";
import {Ionicons, FontAwesome, AntDesign} from "@expo/vector-icons";
export default function Home() {
return (
<View
style={{
    backgroundColor: "white", 
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 20,
}}
>
    <View
    style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }}
>
    <Ionicons name="ios-menu-outline" size={20} color="black"/>
    <FontAwesome name="motorcycle" size={22} color="black"/>
    <View style={{flexDirection: "row"}}>
            <AntDesign name="search1" size={20} color="black"/>
            <Text style={{color: 'grey', fontSize: 14, fontWeight: 600}}>The World's</Text>
            <Text style={{color: "orange", fontSize: 25, fontWeight: 800}}>Best BIKE</Text>
            <Text style={{color: "orange", fontSize: 20}}>ALL</Text>

            <View style={{flex: 1, justifyContent: "left", alignItems: "left"}}>
     <Image 
     style= {{
         width: 150,
         height: 150,
         borderRadius: 10,
         marginBottom: 20,

     }}
     source={{uri: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"}} />
<Text style={{color: "black", fontSize: 20 }}> Peugeuot Bike</Text>
<Text style={{color: 'black', fontSize: 14, fontWeight: 600}}> $900.00</Text>
    </View>
</View>



)








</View>
)}
</View>
)

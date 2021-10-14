import React from "react";
import {View, Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
export default function Login() {
return
 <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
     <Image 
     style= {{
         width: 150,
         height: 150,
         borderRadius: 10,
         marginBottom: 20,

     }}
     source={{uri: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} />
<Text style={{color: "rgba(0,0,0,0.8)", fontSize: 30 }}> Hi, How are you ?</Text>
<Text style={{color: 'black', fontSize: 14, fontWeight: 600}}>POWER BIKE SHOP</Text>
<TouchableOpacity
style={{
    backgroundColor: "#e3e3e3",
    padding: 10,
    paddingHorizontal: 60,
    flexDirection: 'row',
    alignContent: 'center',
    
    borderRadius: 10,
    marginTop: 20,
}}
>
<AntDesign name="google" size={24} color="rgb(256, 100.10)" />

    <Text style= {{fontSize: 20, marginLeft: 15}}>Login with Gmail</Text>


</TouchableOpacity>

<TouchableOpacity
style={{
    backgroundColor: "black",
    padding: 10,
    paddingHorizontal: 60,
    borderRadius: 10,
    flexDirection: row,
    marginTop: 20,
    
}}
>
<AntDesign name="apple-o" size={24} color="black" />
    <Text style= {{fontSize: 20, color:"white", marginLeft: 15 }}>Login with Apple</Text>


</TouchableOpacity>

<TouchableOpacity>
<Text 
    style={{marginTop: 10, fontWeight: 400, color: 'grey'}}>Not a member("")?
<Text style={{color: "orange", fontWeight: "bold" }}> Signup
</Text>
</Text>

</TouchableOpacity>

</View>;


}
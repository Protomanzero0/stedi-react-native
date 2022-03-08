import React from "react";
import { StyleSheet, Text, View, Image, Alert, SafeAreaView, TextInput } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login(props){
    const[number, onChangeNum] = React.useState(null);
    const[password, onChangePass] = React.useState(null);

    function clickLogin() {
        // e.preventDefault();
        fetch ("https://dev.stedi.me/twofactorlogin/" + number, {
            method: "POST"
            // body: JSON.stringify({
            //     phoneNumber: "2089707665",
            //     oneTimePassword: password
            // }),
        })
        // .then((response) => response.json())
        // .then((result) => {
        //     if(result.message === "SUCCESS"){
        //         alert("You are logged in.");
        //         props.setUserLoggedIn(true);
        //     } else {
        //         alert("Please check your login information.");
        //     }
        // }); 
    } 
return (
    <View style = {styles.login}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <TextInput
            style = {styles.input}
            onChangeText = {onChangeNum}
            clearTextOnFocus = "true"
            value = {number}
            placeholder = "Phone Number"
            keyboardType = "numeric"
        />
        <TextInput
            style={styles.input}
            onChangeText = {onChangePass}
            clearTextOnFocus = "true"
            value = {password}
            placeholder = "One Time Password"
            keyboardType = "numeric"
        />
        <Button title = "Log In" onPress={() => clickLogin()}></Button>
    </View>
)
}
// use fetch instead of axios for API call!!!!!!!


const styles = StyleSheet.create({
    input: {
        height: 60,
        margin: 12,
        borderWidth: 3,
        padding: 10,
        alignContent: "center",
        position: "relative",
    },
    text: {
        height: 90, padding: 100,
    },
    // login: {
    //     flexDirection: 'row',
    //     width: '100%',
    //     justifyContent: 'space-between',
    //     backgroundColor: 'green',
    //     height: '12%',
    //     alignItems: 'flex-end',
    //     paddingBottom: 5,
    //     paddingLeft: 10,
    //     paddingRight: 10,
        
    //   },
    
});

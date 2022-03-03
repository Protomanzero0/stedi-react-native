import React from "react";
import { StyleSheet, Text, View, Image, Alert, SafeAreaView, TextInput } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login(props){
    const[number, onChangeNum] = React.useState(null);
    const[password, onChangePass] = React.useState(null);


return (
    <View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <TextInput
            style = {styles.input}
            onChangeNum = {setusername()}
            clearTextOnFocus = "true"
            value = {number}
            placeholder = "Phone Number"
            keyboardType = "numeric"
        />
        <TextInput
            style={styles.input}
            onChangePass = {onChangePass}
            clearTextOnFocus = "true"
            value = {password}
            placeholder = "One Time Password"
            keyboardType = "numeric"
        />
        <Button title = "Log In" onPress={() => props.setUserLoggedIn(true)}></Button>
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
    }
    
});
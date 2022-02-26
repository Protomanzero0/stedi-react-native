import React from "react";
import { StyleSheet, Text, View, Image, Alert, SafeAreaView, TextInput } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Login = () => {
    const[number, onChangeNum] = React.useState(null);
    const[password, onChangePass] = React.useState(null);


return (
    <View>
        <TextInput
            style = {styles.input}
            onChangeNum = {onChangeNum}
            value = {number}
            placeholder = "Phone Number"
            keyboardType = "numeric"
        />
        <TextInput
            style={styles.input}
            onChangePass = {onChangePass}
            value = {password}
            placeholder = "One Time Password"
            keyboardType = "numeric"
        />
    </View>
)
}


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

export default Login;
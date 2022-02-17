import React from "react";
import { StyleSheet, Text, View, Image, Alert, SafeAreaView, TextInput } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const phoneNum = () => {
    const[number, onChangeNum] = React.useState(null);
    const[password, onChangePass] = React.useState(null);

}

function Login() {
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

export default Login;
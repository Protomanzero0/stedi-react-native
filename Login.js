import React from "react";
import { StyleSheet, Text, View, Image, Alert, SafeAreaView, TextInput } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login(props) {
    const [number, onChangeNum] = React.useState(null);
    const [password, onChangePass] = React.useState(null);

    function setUsername() {
        fetch("https://dev.stedi.me/twofactorlogin/" + number, {
            method: "POST"
        })
    }

    function verifyUser() {
        fetch("https://dev.stedi.me/twofactorlogin", {
            method: "POST",
            body: JSON.stringify({
                phoneNumber: number,
                oneTimePassword: password
            }),
            headers: { 'content-type': 'application/json' },
        })
            .then((response) => {
                if (response.status == 200) {
                    props.setUserLoggedIn(true)
                }
            })
            // .then ((result) => {
            //     if (result.status === 200){
            //         alert("You are logged in.");
            //         props.setUserLoggedIn(true);
            //         console.log("Logged in!")
            //     } else {
            //         console.log(result)
            //         alert("Please check your login information.")
            //         console.log("Failed to log in")
            //     }
            // })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <View style={styles.login}>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNum}
                value={number}
                placeholder="Phone Number"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePass}
                value={password}
                placeholder="One Time Password"
                keyboardType="numeric"
            />
            <Button title="Send Code" onPress={() => setUsername()}></Button>
            <Text></Text>
            <Button title="Log In" onPress={() => verifyUser()}></Button>
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

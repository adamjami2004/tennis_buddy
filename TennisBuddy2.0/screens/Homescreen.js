import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {
    const signupPressed = () => {
        navigation.navigate('Sign')
    }

    const loginPressed = () => {
        navigation.navigate('Log')
    }

    return (
        
        <ImageBackground
        
            source={{uri: 'https://wallpapercave.com/wp/wp13014660.jpg'}}
            style={[styles.background, ]}
            resizeMode="cover" // or "contain"

        >
            
            <Text style={styles.text}> Tennis Buddy</Text>
            <View style={styles.container}>
                
                <Text style={styles.text}></Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={signupPressed}
                >
                    <View style={styles.signupButton}>
                        <Text style={styles.signupText}>Sign Up</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={loginPressed}
                    style={styles.button}
                >
                    <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Log In</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
            <Text style={styles.testText}>All rights reserved at Tennis Buddy copyright ©</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        opacity:2.0
        
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:330,
    },
    logo: {
        width: 280,
        height: 280,
        alignSelf: 'center',
        
        
    },
    testText: {
        position: 'absolute',
        bottom: 30, // Adjust position from bottom
        left: 0,
        right: 0, // Center horizontally
        color: 'white',
        fontSize: 24,
        fontSize: 10,
        textAlign: 'center', // Horizontally center the text
        fontWeight: '100'
    },
    
    text: {
        color: 'yellow',
        marginTop: 10, // Adjust the margin to center vertically
        textAlign: 'center',
        fontSize: 40,
        fontWeight:"bold",
        marginTop:140,
        
    },
    signupButton: {
        backgroundColor: 'white',
        borderRadius: 25, // make the button rounded
        width: "75%",
        padding: "2%",
        marginTop: 120, // Adjust the margin to center vertically
    },
    signupText: {
        color: '#ffb31a',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 27,
    },
    loginButton: {
        backgroundColor: '#ffb31a',
        borderRadius: 25,
        width: "75%",
        padding: "2%",
        marginTop: 20, // Adjust the margin to center vertically
    },
    loginText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 27,
    },
    button: {
        width: '90%',
        alignItems: 'center',
    }
});
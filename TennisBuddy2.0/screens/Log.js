import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome for social icons
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebase';

export default function Login({navigation}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const auth= FIREBASE_AUTH;

    Menu = () => {
        navigation.navigate('Menu');
    };
    
    
        
        
        
    const handleLogin = async () => {
        
        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            
            Menu();
        } catch (error){
            console.log(error)
            alert('Email or password Incorrect');
        }finally{
            console.log('end')
        }

    };

    return (
        <View style={styles.background}>
            <Image
            source={require('./assets/black_logo.png')}
            style={{ height: '37%', marginTop:50, marginBottom:0, position:'absolute', top:0 }}
            resizeMode="contain"
            />
            
            <View style={styles.container}>

                <Text style={{fontSize:30, fontWeight:'bold', marginBottom:15, marginTop:45, fontFamily:'monospace'}}>Welcome Back !</Text>
            
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                    placeholderTextColor="#3a4328"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor="#3a4328"
                    secureTextEntry
                />
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                

                {/* Social Login Buttons */}
                <View style={styles.socialLoginContainer}>
                    <TouchableOpacity style={styles.socialButton}>
                        <FontAwesome name="google" size={24} color="#db4437" />
                        <Text style={styles.socialButtonText}>Continue with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <FontAwesome name="facebook" size={24} color="#4267B2" />
                        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <FontAwesome name="apple" size={24} color="#000000" />
                        <Text style={styles.socialButtonText}>Continue with Apple</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
        marginTop: '55%',
        marginBottom: 0,
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 0,
        borderColor: 'white',
    },
    
    input: {
        width: 320,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 75,
        height: 50,
        marginBottom: 10,
        paddingHorizontal: 20,
        color: '#000000',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
    },
    loginButton: {
        width: 150,
        backgroundColor: '#c1bc53',
        marginTop: 15,
        borderRadius: 15,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:20,
    },
    loginText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    signUpText: {
        color: '#3a4328',
        marginTop: 20,
        marginBottom:40,
    },
    socialLoginContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        width: 320,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
      
    },
    socialButtonText: {
        marginLeft: 10,
        color: '#3a4328',
        fontWeight: 'bold',
        
    },
});

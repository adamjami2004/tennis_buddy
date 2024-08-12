import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';
import {getAuth,  createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, setDoc, addDoc, getDocs } from "firebase/firestore";
import { Picker } from '@react-native-picker/picker';


const CustomInput = ({ placeholder, icon, value, onChangeText }) => {
    return (
        <View style={styles.inputContainer}>
            <AntDesign name={icon} size={24} color="black" style={styles.icon} />
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={[styles.input, { width: 250, paddingVertical: 12, borderWidth:1, borderColor:"black", borderRadius:10, }]} // Adjust width and padding
            />
        </View>
    );
};



const Sign = ({navigation}) => {




    

   
    

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [city, setCity] = React.useState('');
    const [age, setAge] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [preferredHand, setHand] = React.useState('');
    const [level, setLevel] = React.useState('');
    const [backhand, setBackhand] = React.useState('');
    const [playType, setPlaytype] = React.useState('');
    const [surface, setSurface] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [utr, setUtr] = React.useState('');
    

    const [selectedLevel, setSelectedLevel] = useState(null);

    const levels = [
        { title: 'Beginner', description: 'Just starting out' },
        { title: 'Recreational', description: 'Plays occasionally' },
        { title: 'Intermediate', description: 'Fairly experienced' },
        { title: 'Intermediate+', description: 'Above average skill' },
        { title: 'Advanced', description: 'Highly skilled' },
        { title: 'Expert', description: 'Top level expertise' },
    ];

    const handleSelect = (level) => {
        setSelectedLevel(level);
        setLevel(level);  // Set the chosen level
        console.log(level)
    };



    
    // const usersCollection = collection(firestore, "users");

    // const auth= FIREBASE_AUTH;
    const [step, setStep] = useState(1);
    
    // const checkUsernameExists = async (username) => {
    //     try {
    //         const querySnapshot = await getDocs(collection(firestore, 'users'));
    //         const usernames = querySnapshot.docs.map(doc => doc.data().username);
    //         return usernames.includes(username);
    //     } catch (error) {
    //         console.error('Error checking username:', error);
    //         return false;
    //     }
    // };

    // const handlesignin = async () => {
        
    //     try {
    //         const auth = getAuth();
    //         const response = await createUserWithEmailAndPassword(auth, email, password);
            
    //         // Get the UID of the newly created user
    //         const uid = response.user.uid;
    
    //         // Save additional user data in Firestore using the UID as the document ID
    //         // Assuming 'users' is your collection name
    //         await setDoc(doc(firestore, 'users', uid), {
    //             firstName,
    //             lastName,
    //             city,
    //             age,
    //             gender,
    //             email,
    //             password,
    //             preferredHand,
    //             height,
    //             level,
    //             weight,
    //             backhand,
    //             playType,
    //             surface,
    //             phone,
    //             username,
    //             utr,
    //         });
    
    //         alert('You have successfully signed up, please go back to the previous page');
    //     } catch (error) {
    //         console.log(error);
    //         alert('Failed for ' + error.message);
    //     } finally {
    //         setLoading(false);
    //     } 
    // };

    const handleNextStep = async () => {
        // const usernameExists = await checkUsernameExists(username);
        const usernameExists = false;
        if (usernameExists) {
            alert('Username already exists. Please choose another username.');
        } else {
            setStep(step + 1);
        }
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    

    

    const renderStep = () => {
        switch (step) {
            case 1:
                return (              
                    <View>
                        <Text style={{alignSelf:'center', fontSize:16, fontWeight:'500', marginBottom:30 }}> Let us determine your level first 😎 🎾</Text>
                        <View style={styles.container}>
                            
                            {levels.map((level, index) => (
                                <TouchableOpacity
                                key={index}
                                style={[
                                    styles.levelBox,
                                    selectedLevel === level.title && styles.selectedLevelBox
                                ]}
                                onPress={() => handleSelect(level.title)}
                                >
                                <Text style={styles.title}>{level.title}</Text>
                                <Text style={styles.description}>{level.description}</Text>
                                </TouchableOpacity>
                            ))}
                            <TouchableOpacity style={styles.button} onPress={handleNextStep}>
                            <Text style={styles.txt1}>Next</Text>
                            </TouchableOpacity>
                        </View> 
                    </View>     
                );
            case 2:
                return (
                    <View style={styles.container}>
                        <Text style={styles.txt}>Step 2: Additional Information</Text>
                        <CustomInput
                            placeholder="First Name"
                            onChangeText={setFirstName}
                            value={firstName}
                            style={styles.input}
                            icon="idcard"
                        />
                        <CustomInput
                            placeholder="Last Name"
                            onChangeText={setLastName}
                            value={lastName}
                            style={styles.input}
                            icon="idcard"
                        />
                        <CustomInput
                            placeholder="Email Adress"
                            onChangeText={setEmail}
                            value={email}
                            style={styles.input}
                            icon="mail"
                        />
                        <CustomInput
                            placeholder="password"
                            onChangeText={setPassword}
                            value={password}
                            style={styles.input}
                            icon="phone"
                        />
                        <CustomInput
                            placeholder="City"
                            onChangeText={setCity}
                            value={city}
                            style={styles.input}
                            icon="enviroment"
                        />
                        
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button1} onPress={handlePreviousStep}>
                                <Text style={styles.txt1}>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={handleNextStep}>
                                <Text style={styles.txt1}>Next</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                );
            case 3:
                return (
                    <View style={styles.container}>
                        <Text style={styles.txt}>Step 3: Tennis Information</Text>
                        <CustomInput
                            placeholder="Player Type"
                            onChangeText={setPlaytype}
                            value={playType}
                            style={styles.input}
                            icon="user"
                        />
                        <CustomInput
                            placeholder="username"
                            onChangeText={setUsername}
                            value={username}
                            style={styles.input}
                            icon="form"
                        />
                        <CustomInput
                            placeholder="Age"
                            onChangeText={setBackhand}
                            value={backhand}
                            style={styles.input}
                            icon="book"
                        />
                        <CustomInput
                            placeholder="Gender"
                            onChangeText={setPlaytype}
                            value={playType}
                            style={styles.input}
                            icon="woman"
                        />
                        <CustomInput
                            placeholder="Phone"
                            onChangeText={setPhone}
                            value={phone}
                            style={styles.input}
                            icon="phone"
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button1} onPress={handlePreviousStep}>
                                <Text style={styles.txt1}>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={handleNextStep}>
                                <Text style={styles.txt1}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
                case 4:
                    return (
                        <View style={styles.container}>
                            <Text style={styles.agree}>By finishing the sign up you agree to the terms and conditions of Tennis Buddy and will be redirected to the LogIn</Text>
                            <TouchableOpacity style={styles.finishButton} onPress={() => {
                                handlesignin();
                                
                                }}>
                                <Text style={styles.txt1}>Finish</Text>
                            </TouchableOpacity>
                        </View>
                    );
            default:
                return null;
        }
    };

    

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
            <Text style={styles.sign}>Sign UP</Text>
                <View style={styles.stepBar}>
                    {[1, 2, 3, 4].map(num => (
                        <TouchableOpacity key={num} onPress={() => setStep(num)} style={[styles.stepBarItem, num === step && styles.activeStep]}>
                            <Text>{num}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                {renderStep()}
            </View>
            <Text style={styles.testText}>All rights reserved at Tennis Buddy copyright ©</Text>
            <StatusBar barStyle="dark-content" />

        </SafeAreaView>
    );
};



































const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    picker: {
        width: 200, // Adjust width as needed
        height: 30, // Adjust height as needed
      },
    sign:{
        marginBottom:20,
        fontWeight:'bold',
        fontSize:30

    },
    testText: {
        position: 'absolute',
        bottom: 30, // Adjust position from bottom
        left: 0,
        right: 0, // Center horizontally
        color: 'black',
        fontSize: 24,
        fontSize: 10,
        textAlign: 'center', // Horizontally center the text
        fontWeight: '100'
    },
    agree: {
        marginRight:20,
        marginLeft:20,
        alignItems: 'center',
    },
    button:{
        backgroundColor: '#ee9329',
        height:40,
        width:65,
        borderRadius:25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20,


    },
    button1:{
        backgroundColor: '#ee9329',
        height:40,
        width:65,
        borderRadius:25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20,
        right:5,


    },
    finishButton: {
        backgroundColor: '#ee9329',
        height: 40,
        width: 100,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    txt:{
        marginBottom:30,
        fontWeight:"bold"
    },
    txt1:{
        color: 'white',

    },
    stepContainer: {
        flex: 1,
        marginTop:-120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 8,
        width: 200,
    },
    icon: {
        marginRight: 10,
    },
    stepBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 50,
    },
    stepBarItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
    },
    activeStep: {
        backgroundColor: '#ee9329',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 20,
      },
      levelBox: {
        width: '40%',
        height: 100,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 10,
      },
      selectedLevelBox: {
        backgroundColor: '#ff6060',
        borderColor: '#ff6060',
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
      },
      description: {
        fontSize: 12,
        textAlign: 'center',
      },
});

export default Sign;
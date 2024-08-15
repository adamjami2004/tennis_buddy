import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TextInput, Button, Modal, ActivityIndicator, Linking, StatusBar, ImageBackground } from 'react-native';
import { AntDesign, Entypo, Feather, FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView , Animated} from 'react-native';
import { collection, doc, setDoc, addDoc, getDoc,getDocs, where, query, getFirestore } from "firebase/firestore";
import { FontAwesome5 } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dimensions , Platform, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Shop from './Shop';
import Profil from './Profil';
import Ball from './Ball';
import CalendarScreen from './calendar';
import Search from './search';




let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;







export default function Menu({navigation}) {

    

    const Feed = ({ user, time, date, location, type}) => {
        return (
            <View style={{borderRadius:10, borderWidth:1, width:'90%', alignSelf:'center', height:screenHeight*0.33, marginBottom:10, borderColor:'#c2c1c1'}}>
                <View style={{width:'90%', marginTop:2, marginLeft:5,height:'30%' , flexDirection:'row', alignItems:'center', }}>
                    <View style={{marginRight:20, marginLeft:10, backgroundColor:'black', borderRadius:100, height:screenHeight*0.05, width:screenHeight*0.05, alignItems:'center',  justifyContent:'center'}}>
                        <Text style={{color:'white', padding:10, fontWeight:'bold', fontSize:20}}>N</Text>
                    </View>
                    <Text style={{fontWeight:'bold', fontSize:17, marginLeft:-10}}>{user}'s game</Text>
                    <View style={{position:'absolute', right:2, flexDirection:'row', alignItems:'center'}}>
                        <Ionicons name='person' size={14} style={{marginRight:3}}/>  
                        <Text>3/4</Text>
                    </View>
                </View>
                <View style={{width:'90%', height:'50%', marginLeft:15,}}>
                    <View style={{flexDirection:'row', alignItems:'center', marginBottom:8}}>
                        <Entypo name='calendar' size={24} style={{marginRight:10}}/>
                        <Text style={{fontWeight:'500'}}>{date}</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', marginBottom:8}}>
                        <AntDesign name='enviroment' size={24} style={{marginRight:10}}/>
                        <Text style={{fontWeight:'500'}}>{location}</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', marginBottom:8}}>
                        <Feather name='watch' size={24} style={{marginRight:10}}/>
                        <Text style={{fontWeight:'500'}}>{time}</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', marginBottom:8}}>
                        <FontAwesome6 name='people-group' size={24} style={{marginRight:10}}/>
                        <Text style={{fontWeight:'500'}}>{type}</Text>
                    </View>
                </View>
                <View style={{ height:'25%', width:'90%', alignSelf:'center', marginTop:-20, justifyContent:'center', flexDirection:'row', alignItems:'center'}}>
                   
                   <View style={{backgroundColor:'black', width:'15%', marginLeft:5, alignItems:'center', flexDirection:'row', height:50, borderRadius:100, justifyContent:'center', position:'absolute', bottom:5, right:5, width:50}}>
                        <MaterialIcons name='more-horiz' color='white' size={24} />
                    </View>

                    <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center', height: '70%' ,  position:'absolute', bottom:10, left:0 }}>
                        <View style={{ justifyContent: 'center', height: '100%', flexDirection: 'row' }}>
                        {/* First spot - filled */}
                        <View style={{ backgroundColor: 'black', width: 50, height: 50, borderRadius: 100, justifyContent: 'center', alignItems: 'center', marginRight: -8 }}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: '500' }}>A</Text>
                        </View>
                        {/* Second spot - filled */}
                        <View style={{ backgroundColor: '#3c3b3b', width: 50, height: 50, borderRadius: 100, justifyContent: 'center', alignItems: 'center', marginRight: -8 }}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: '500' }}>N</Text>
                        </View>
                        {/* Third spot - empty */}
                        <View style={{ backgroundColor: '#818181', width: 50, height: 50, borderRadius: 100, justifyContent: 'center', alignItems: 'center', marginRight: -8 }}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: '500' }}>D</Text>
                        </View>
                        {/* Fourth spot - empty */}
                        <View style={{ backgroundColor: '#c2c1c1', width: 50, height: 50, borderRadius: 100, justifyContent: 'center', alignItems: 'center', marginRight: -8 }}>
                            <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}></Text>
                        </View>
                        </View>
                    </View>
                    
                    

                </View>
                
                
            </View>
        );
    };

    const [menuOpen, setMenuOpen] = useState(false);
    const slideAnim = useRef(new Animated.Value(-screenWidth)).current;
    


    const toggleMenu = () => {
        if (menuOpen) {
            Animated.timing(slideAnim, {
                toValue: -screenWidth, // Slide out of view
                duration: 300,
                useNativeDriver: true,
            }).start(() => setMenuOpen(false));
        } else {
            setMenuOpen(true);
            Animated.timing(slideAnim, {
                toValue: 0, // Slide into view
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };

    

    const [step, setStep] = useState(1);

    const stephome = () => {
        setStep(1);
    };

    const requests = () => {
        setStep(2);
    };

    const find = () => {
        setStep(3);
    };

    const shop = () => {
        setStep(4);
    };

    const profile = () => {
        setStep(5);
        console.log("Y")
    };
    const calendargo = () => {
        setStep(6);
        console.log("Y")
    };

    const TennisTV = () => {
        Linking.openURL('https://www.tennistv.com/');
      };

    const Rankings = () => {
        Linking.openURL('https://www.atptour.com/en/rankings/singles');
    };






    // Step Rendering
    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <View style={{backgroundColor:'#fafafa'}}>
                        <View style={styles.containertitleprofil}>
                            <View style={styles.left_title}>
                                <AntDesign style={{marginRight:20}} name="menu-fold" size={24} color="white" onPress={toggleMenu}/>
                                <Ionicons name="tennisball" size={24} color="#C7D337" />
                                <Text style={styles.profiltitle}>Tennis buddy</Text>
                            </View>
                            <View style={styles.right_title}>
                                <AntDesign name="calendar" size={24} color="white" onPress={calendargo}/>
                                <AntDesign style={{marginHorizontal:15}} name="message1" size={24} color="white"/>
                                <AntDesign style={{marginRight:20}} name="notification" size={24} color="white"/>

                                                          
                            </View>
                        </View>

                        {/* Sliding Menu */}
                        {menuOpen && (
                            <Animated.View style={[styles.fullScreenMenu, { transform: [{ translateX: slideAnim }] }]}>
                                <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
                                    <AntDesign name="menufold" size={24} color="white" />
                                </TouchableOpacity>

                                <View style={{marginBottom:40, flexDirection:'row', height:'3%', alignItems:'center'}}>
                                    <View style={{backgroundColor:'white' , marginRight:20, height:50,width:50, borderRadius:100, alignItems:'center', justifyContent:'center'}}><Text style={{fontSize:25, fontWeight:'bold'}}>A</Text></View>
                                    <Text style={{color:"white", fontWeight:'bold', fontSize:22}}>Adam Jami</Text>
                                </View>

                                {/* Add your menu options here */}
                                <Text style={styles.menuItem}>Assistance</Text>
                                <Text style={styles.menuItem}>Game Records</Text>
                                <Text style={styles.menuItem}>Train With Us</Text>
                                
                                <View style={{flexDirection:'row', alignSelf:'center', marginTop:50,}}>
                                    <Entypo name="instagram" size={32} color="white" />
                                    <Entypo style={{marginHorizontal:25}} name="facebook" size={32} color="white" />
                                    <AntDesign name="twitter" size={32} color="white" />
                                </View>

                                <TouchableOpacity style={{alignItems:'center', marginTop:50, borderWidth:1, borderColor:'white', borderRadius:25}}>
                                    <Text style={{color:'white', padding:15, fontSize:20}}>Report Match Score</Text>
                                </TouchableOpacity>

                            </Animated.View>
                        )}
                        
                        
                        
                        
                        
                        <ScrollView
                            vertical
                            showsVerticalScrollIndicator={false}
                            style={{  width: '96%', alignSelf: 'center', height: '75%', marginTop:15, }}
                            maintainVisibleContentPosition={{ minIndexForVisible: 0, autoscrollToTopThreshold: 50 }}
                        >
                            <Feed 
                                source={require('./assets/novak_JO.jpg')} 
                                user="Adam"
                                location="Saint-Germain Park"
                                time="6pm-9pm"
                                date="Friday 15th Aug"
                                type="Doubles"   
                            />
                            <Feed 
                                source={require('./assets/novak_JO.jpg')} 
                                user="Novak"
                                location="Saint-Germain Park"
                                time="6pm-9pm"
                                date="Friday 15th Aug"
                                type="Doubles"   
                            />
                            <Feed 
                                source={require('./assets/novak_JO.jpg')} 
                                user="Carlos"
                                location="Saint-Germain Park"
                                time="6pm-9pm"
                                date="Friday 15th Aug"
                                type="Doubles"   
                            />
                            <Feed 
                                source={require('./assets/novak_JO.jpg')} 
                                user="Carlos"
                                location="Saint-Germain Park"
                                time="6pm-9pm"
                                date="Friday 15th Aug"
                                type="Doubles"   
                            />
                            <Feed 
                                source={require('./assets/novak_JO.jpg')} 
                                user="Carlos"
                                location="Saint-Germain Park"
                                time="6pm-9pm"
                                date="Friday 15th Aug"
                                type="Doubles"   
                            />
                            <Feed 
                                source={require('./assets/novak_JO.jpg')} 
                                user="Carlos"
                                location="Saint-Germain Park"
                                time="6pm-9pm"
                                date="Friday 15th Aug"
                                type="Doubles"   
                            />
                            <Feed 
                                source={require('./assets/novak_JO.jpg')} 
                                user="Carlos"
                                location="Saint-Germain Park"
                                time="6pm-9pm"
                                date="Friday 15th Aug"
                                type="Doubles"   
                            />
                        </ScrollView>

                        


                        
                    </View>
                );


            
            case 2:
                return (
                    <Search/>
                )

            case 3:
                return (
                    <Ball/>
                )
            case 4:
                return (
                    <Shop/>
                )
            case 5:
                return (
                    <Profil/>
                )
            case 6:
                return (
                    <CalendarScreen/>
                )

            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            

            {renderStep()}
            

            

            <View style={styles.bottomNavBar}>
                <TouchableOpacity onPress={stephome} style={styles.iconContainer}>
                    <AntDesign name="home" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={requests} style={styles.iconContainer}>
                    <AntDesign name="search1" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={find} style={styles.iconContainer}>
                    <Ionicons name="tennisball" size={40} color="#C7D337" />
                </TouchableOpacity>
                <TouchableOpacity onPress={shop} style={styles.iconContainer}>
                    <AntDesign name="shoppingcart" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={profile} style={styles.iconContainer}>
                    <AntDesign name="user" size={24} color="black" />
                </TouchableOpacity>
                
                <StatusBar barStyle="light-content" />

            </View>
        </View>
    );



  
};








const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor:"#F4F4F4",
    },
    fullScreenMenu: {
        position: 'absolute',
        top: 25,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
        zIndex: 1000,
        padding: 16,
        height:'400%'
    },
    closeButton: {
        alignItems: 'flex-end', // Align the close button to the right
        marginBottom: 20,
        marginTop:10,
    },
    closeMenuText: {
        color: 'white',
        fontSize: 18,
    },
    menuItem: {
        color: 'white',
        fontSize: 18,
        marginVertical: 10,
        
    },

   
    left_title: {
        flexDirection:'row',
        justifyContent:'center',
        marginLeft:20,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        borderRadius:5,
    },
    right_title: {
        flexDirection:'row',
        marginRight:10,
    },
    
    
    
    
    unit: {
        alignItems:'center', 
    },
    
    
    
      
    

    text: {
        fontSize: 18,
        color:"white",
        fontWeight:'bold',
        
    },
    bubbleButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#3c3c3c',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bubblesContainer: {
        position: 'absolute',
        bottom: 100,
        right: 20,
        flexDirection: 'column',
        alignItems: 'center',
    },
    bubble: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#C7D337',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    bubbleText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },

    
   
    
    
      
    top_button: {
    borderRadius:100,
    // backgroundColor:"#ECEAEA",
    backgroundColor:"white",
    marginRight:17,
    padding:5,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,     
    },

    line: {   
        alignItems: 'center',
        marginBottom: 30,
        marginTop:30,
            
    },

    line1: {
        flexDirection: 'row',
        marginBottom: 30,
    },

    line2: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 5,
    marginHorizontal:7,
    padding: 15,
    borderColor: 'white', 
    borderWidth: 1,
    borderRadius: 100,
    width: screenWidth * 0.2,
    height: screenHeight * 0.09,
    backgroundColor:'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2, 
    justifyContent:'center'
    },

    line2_droite: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom:5,
        width: screenWidth * 0.2,
        marginHorizontal:7,
        padding: 15,
        borderColor: 'white', 
        borderWidth: 1,
        borderRadius: 100,
        height:  screenWidth * 0.2,
        backgroundColor:'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2, 
        justifyContent:'center'

        
    },

    line2_gauche: {
        flexDirection: 'column',
        alignItems: 'center',
        width: screenWidth * 0.2,
        marginBottom: 5,
        marginHorizontal:7,
        padding: 15,
        borderColor: 'white', 
        borderWidth: 1,
        borderRadius: 100,
        height: screenHeight * 0.09,
        backgroundColor:"white",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2, 
        justifyContent:'center'
        },

    line3: {
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal:10,
        borderRadius: 5, 
        height: screenHeight * 0.09,
        },
    
    line3_droite: {
        alignItems: 'center',
        marginBottom: 10,
        marginRight:10,
        height: screenHeight * 0.09,
        },

    line3_gauche: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft:10,
        height: screenHeight * 0.09,
    },


    

   

    third: {
        marginHorizontal: 40,
    },

    fourthline: {    
        flexDirection: 'row',
        marginTop:20,
        justifyContent: 'space-between', 
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,    
    },




    content: {
        flex: 1,
    },
    settings: {
        marginRight: 20,
    },
    bottomNavBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
        paddingTop:2,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        height:'13%',
        paddingBottom:20,
        backgroundColor:"white",
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
    },
   
    profiltitle:{
        marginLeft:5,
        justifyContent:"center",
        flex: 1,
        fontWeight: 'bold',
        color:"#C7D337",
        fontSize:20,
        

    },
    profiltitle1:{
        alignItems:"center",
        marginTop:20,
        marginLeft:30,
        marginBottom:20,
        justifyContent:"center",
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color:"#C7D337",
        fontSize:20,
        

    },
    profiltitle2:{
        alignItems:"center",
        marginTop:20,
        marginBottom:20,
        justifyContent:"center",
        flex: 1,
        marginLeft:"19%",
        textAlign: 'center',
        fontWeight: 'bold',
        color:"#C7D337",
        fontSize:20,
        

    },
    containertitleprofil:{
        position: 'relative',
        width: '100%',
        borderBottomWidth: 1,
        borderColor:"white",
        flexDirection: 'row',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,      
        paddingTop:60,
        paddingBottom:20,
        backgroundColor:"black",
        },
    
});


import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,TextInput, Button, Modal, ActivityIndicator, Linking, StatusBar, ImageBackground } from 'react-native';
import { AntDesign, Entypo, MaterialIcons, Octicons } from '@expo/vector-icons';
import { SafeAreaView , Animated} from 'react-native';
import { collection, doc, setDoc, addDoc, getDoc,getDocs, where, query, getFirestore } from "firebase/firestore";
import { FontAwesome5 } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dimensions , Platform, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;


export default function Profil (){

    const [menuOpen, setMenuOpen] = useState(false);
    const slideAnim = useRef(new Animated.Value(-screenWidth)).current;
    const [selectedTab, setSelectedTab] = useState('Bio');


    const renderContent = () => {
        if (selectedTab === 'Bio') {
            return (
                <View>
                    <View style={{ marginTop: 10 }}>
                        <View style={styles.profileRow}>
                            <Text style={styles.label}>Name</Text>
                            <Text style={styles.value}>Adam Jami</Text>
                        </View>
                        <View style={styles.profileRow}>
                            <Text style={styles.label}>Age</Text>
                            <Text style={styles.value}>20 years old</Text> 
                        </View>
                        <View style={styles.profileRow}>
                            <Text style={styles.label}>Level</Text>
                            <Text style={styles.value}>Intermediate</Text> 
                        </View>
                        <View style={styles.profileRow}>
                            <Text style={styles.label}>Gender</Text>
                            <Text style={styles.value}>Male</Text> 
                        </View>
                        <View style={styles.profileRow}>
                            <Text style={styles.label}>Hand</Text>
                            <Text style={styles.value}>Righty</Text>
                        </View>
                        <View style={styles.profileRow}>
                            <Text style={styles.label}>Player Type</Text>
                            <Text style={styles.value}>Singles</Text>
                        </View>
                    </View>
                </View>
            );
        } else if (selectedTab === 'Matches') {
            return (
                <View>
                    {/* Matches content */}
                    <View style={{ marginTop: 10 }}>
                        <View style={styles.profileRow}>
                            <Text style={styles.label}>Match 1</Text>
                            <Text style={styles.value}>Won - 6/3 6/4</Text>
                        </View>
                        <View style={styles.profileRow}>
                            <Text style={styles.label}>Match 2</Text>
                            <Text style={styles.value}>Lost - 4/6 6/1 2/6</Text>
                        </View>
                        {/* Add more match records as needed */}
                    </View>
                </View>
            );
        }
    };



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
  
    return (
      <View >
        <View style={styles.containertitleprofil}>
            <View style={styles.left_title}>
                <AntDesign style={{marginRight:20}} name="menu-fold" size={24} color="white" onPress={toggleMenu}/>
                <Ionicons name="tennisball" size={24} color="#C7D337" />
                <Text style={styles.profiltitle}>Tennis buddy</Text>
            </View>
            <View style={styles.right_title}>
                <AntDesign name="calendar" size={24} color="white" />
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

        <View style={{alignSelf:'center', borderRadius:100, borderWidth:1, borderColor:'black', height:screenHeight*0.2, width:screenHeight*0.2, marginTop:20, backgroundColor:'black', alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white', fontWeight:'bold', fontSize:100}}>A</Text>
        </View>
        <View style={{marginTop:20, flexDirection:'row', justifyContent:'center'}}> 
            <AntDesign style={{marginHorizontal:20}} name="setting" size={30} color="black" />
            <Octicons style={{marginHorizontal:20}} name="pencil" size={30} color="black" />
        </View>
        
        <Text style={{marginLeft:10, marginTop:20, fontSize:20, fontWeight:'bold'}}>Profile Summary</Text>

        <View style={styles.tabContainer}>
            <TouchableOpacity style={[styles.tabButton, selectedTab === 'Bio' && styles.activeTab]} onPress={() => setSelectedTab('Bio')}>
                <Text style={[styles.tabText, selectedTab === 'Bio' && styles.activeTabText]}>Bio</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.tabButton, selectedTab === 'Matches' && styles.activeTab]} onPress={() => setSelectedTab('Matches')}>
                <Text style={[styles.tabText, selectedTab === 'Matches' && styles.activeTabText]}>Matches</Text>
            </TouchableOpacity>
        </View>

        {/* Rendered Content */}
        {renderContent()}
        
        {/*Prifle details*/}
        

        

      </View>
    )
  
};


const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor:"#F4F4F4",
    },
    profileRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        width: '95%',
        marginLeft: 10,
    },
    label: {
        fontSize: 15,
        flex: 1, // Adjusts the width of the label
    },
    value: {
        fontSize: 15,
        fontWeight: 'bold',
        flex: 2, // Adjusts the width of the value
        textAlign: 'left',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    tabButton: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    activeTab: {
        borderBottomColor: '#C7D337',
    },
    tabText: {
        fontSize: 18,
        color: 'gray',
    },
    activeTabText: {
        color: '#C7D337',
        fontWeight: 'bold',
    },
    shop_item: {
        height:'33%',
        width:'100%',
        borderRadius:10,
        borderWidth:2,
        borderColor:'black',
        justifyContent:'center',
        marginBottom:10,
        alignItems:'center'

    },
    item: {
        padding:10,

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
        marginBottom: 0,
        marginTop:15,
            
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



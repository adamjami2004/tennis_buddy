import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Animated } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';


let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export default function CalendarScreen() {


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


    const scheduledDays = {
        '2024-08-05': { marked: true, dotColor: '#C7D337' },
        '2024-08-10': { marked: true, dotColor: '#C7D337' },
        '2024-08-18': { marked: true, dotColor: '#C7D337' },
    };

    return (
        <View style={styles.container}>
            <View style={styles.containertitleprofil}>
                <View style={styles.left_title}>
                    <AntDesign style={{marginRight:20}} name="menu-fold" size={24} color="white" onPress={toggleMenu}/>
                    <Ionicons name="tennisball" size={24} color="#C7D337" />
                    <Text style={styles.profiltitle}>Tennis buddy</Text>
                </View>
                <View style={styles.right_title}>
                    <AntDesign name="calendar" size={24} color="white" onPress={''}/>
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

            <ScrollView>
                <Calendar
                    markedDates={scheduledDays}
                    theme={{
                        todayTextColor: '#C7D337',
                        arrowColor: '#C7D337',
                        dotColor: '#C7D337',
                        selectedDotColor: '#C7D337',
                        indicatorColor: '#C7D337',
                    }}
                />
            </ScrollView>
        </View>
    );
}

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


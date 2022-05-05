import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
 const navigation = useNavigation() ;

  return (
    <View style={styles.menuContainer}>
    <TouchableOpacity style={styles.buttonStyle}
    onPress={() => navigation.navigate('Course')}
    >
        <Image
        style={styles.iconStyle} 
            source={require('../../assets/course.png')}   
        />
        <Text style={styles.textStyle1} >Course</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonStyle}
    onPress={() => navigation.navigate('Contact')}
    >
        <Image
        style={styles.iconStyle} 
            source={require('../../assets/contact.png')}   
        />
         <Text style={styles.textStyle1} >Contact</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonStyle}
    onPress={() => navigation.navigate('Student')}
    >
        <Image
        style={styles.iconStyle} 
            source={require('../../assets/user1.png')}       
        />
        <Text style={[styles.textStyle1, {marginTop: 6}]} >User</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonStyle}
    onPress={() => navigation.navigate('About')}
    >
        <Image
        style={styles.iconStyle} 
            source={require('../../assets/about.png')}
            
        />
        <Text style={styles.textStyle1} >About</Text>
    </TouchableOpacity>
    </View>
  )
} ;



const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row' ,
        justifyContent: 'space-between',
        paddingVertical: 30 ,
        
    } ,
    textStyle1 : {
        fontSize: 12,
        textDecorationColor: 'grey',
        textTransform: 'uppercase'
    } ,
   
}) ;

export default Menu ;
import { StyleSheet, Text, View , Image, ScrollView } from 'react-native'
import React from 'react' ;
import Menu from '../components/Menu';

const Home = (props) => {

    const description = 'Man alone will not be able to go very far. Woman alone will be just a pool of energy with no possibility of any dynamic movement. When both are together they are complementary. No one is higher than the other; complementaries are never higher and lower, complementaries are equal. Neither the man nor the woman is higher, they are complementaries. Together they make a whole, and together they can create a holiness which is not possible for either separately.'
  return (
    <ScrollView> 
   <View style={styles.mainContainer}>
     <View style={styles.homeTop}>
         <Image  
             style={styles.headerImage}
             source={require('../../assets/Yoga.jpg')}
           
         />

         <Text style={styles.mainHeader}>Welcome to</Text>
         <Text 
         style={[styles.mainHeader , {fontSize :33,
         color: '#4c5dab' ,
         marginTop: 0 
         }]}
         >{props.channelName}</Text>

         <Text style={styles.paraStyle}>{description}</Text>
     </View>

     <View style={styles.menuStyle}>
     <View style={styles.lineStyle}></View>
     <Menu/>
     <View style={styles.lineStyle}></View>
     </View>

   </View>

   
   </ScrollView>
  )
}



const styles = StyleSheet.create({
    container : {
      flex: 1 ,
      backgroundColor : '#fff' ,
      alignItems: 'center' ,
      justifyContent : 'center' ,
    } ,

    mainContainer : {
        height : '100%' ,
        display: 'flex' ,
        justifyContent: 'space-between' ,
        paddingHorizontal : 20 ,
        backgroundColor : '#fff' ,
        textAlign: 'center' ,
        marginTop: 20
    } ,

    homeTop : {
      display: 'flex' ,
      justifyContent : 'center' ,
      alignItems : 'center' ,
      paddingHorizontal: 10, 

    }, 

    headerImage : {
        height: undefined ,
        width: '100%' ,
        aspectRatio : 1 ,
        display : 'flex' ,
        alignItems : 'stretch' ,
        marginTop: 30 ,
        marginBottom : 50,

        borderRadius: 20

    } ,

  mainHeader : {
    fontSize : 30,
    color : '#344055' ,
    textTransform : 'capitalize' ,
    fontFamily : 'JosefinSans_500Medium'
  } ,

  paraStyle : {
    textAlign : 'left' ,
    fontSize : 20 ,
    color : '#7d7d7d' ,
    marginTop : 30,
    paddingBottom: 30 ,
  } ,
  lineStyle: {
    borderWidth: 0.5 ,
    borderColor: 'grey'

  } ,

  menuStyle : {
    marginTop: 30,
    marginBottom : 20,
    
  }


}) ;


export default Home ;
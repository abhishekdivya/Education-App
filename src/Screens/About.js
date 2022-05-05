import { StyleSheet, Text, TouchableOpacity, View , Image, ScrollView , Linking } from 'react-native'
import React from 'react' ;

const About = () => {
  return (
    <ScrollView
    showsVerticalScrollIndicator={false} > 
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Abhishek Raj</Text>
      <Text style={styles.para}>I am fullstack developer</Text>

      <View>
        <Image 
          style={styles.imgStyle}
          source={{
            uri: 'https://i.pinimg.com/736x/d7/25/c8/d725c8f85220d1fc109112f5ee20715f.jpg'
          }}
        />
      </View>
      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}>About me</Text>
        <Text style={styles.paraStyle}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </Text>
      </View>

      <Text style={styles.mainHeader}>Follow me on Social Networks</Text>
      <View style={styles.menuConatainer}>
        <TouchableOpacity
        onPress={() => 
        Linking.openURL('https://www.facebook.com/indianabhishek/')
        }
        >
          <Image 
            style={styles.iconStyle}
            source={{uri: 'https://cdn-icons-png.flaticon.com/512/145/145802.png'}}
            

          />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => 
        Linking.openURL('https://www.instagram.com/abhishekraj.07/')
        }
        >
          <Image 
            style={styles.iconStyle}
            source={{uri: 'https://cdn-icons-png.flaticon.com/512/1409/1409946.png'}}
            

          />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => 
        Linking.openURL('https://twitter.com/SadhguruJV?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor')
        }
        >
          <Image 
            style={styles.iconStyle}
            source={{uri: 'https://cdn-icons-png.flaticon.com/512/733/733579.png'}}
            

          />
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}



const styles = StyleSheet.create({
  aboutContainer : {
    display : 'flex' ,
    alignItems : 'center' ,

  } ,
  imgStyle : {
    width: 140,
    height : 200 ,
    borderRadius: 100

  } ,
  mainHeader : {
    fontSize : 18 ,
    color : '#344055' ,
    textTransform : 'uppercase' ,
    fontWeight : '500' ,
    marginTop : 50 ,
    marginBottom : 10,
    
  } ,
  paraStyle : {
    fontSize : 18 ,
    color : '#fff' ,
    paddingBottom : 30, 
  } ,
  para : {
    fontSize : 18 ,
    color : '#7d7d7d' ,
    paddingBottom : 30, 
  } ,
  aboutSubHeader : {
    fontSize : 20 , 
    color: '#fff' ,
    textTransform : 'uppercase' ,
    fontWeight : '500' ,
    marginVertical : 15 ,
    alignSelf : 'center'
    
  } ,
  aboutLayout : {
    backgroundColor : '#4c5dab' ,
    paddingHorizontal : 30 ,
    marginVertical : 30 ,
    paddingVertical : 20
  } ,
  menuConatainer : {
    width : '100%' ,
    flexDirection : 'row' ,
    justifyContent : 'space-evenly'
  } ,
  iconStyle : {
    width : '100%' ,
    height : 50 ,
    aspectRatio : 1 ,
  }
}) ;

export default About ;
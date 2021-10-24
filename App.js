import React from 'react';
import {View,Text,StyleSheet,Dimensions,Image} from 'react-native';

const {width,height} = Dimensions.get('screen')
export default function App(){
  return(
    <View>
      <Text style={styles.text2}>REACT NATIVE</Text>
      <View style={styles.square}>
        <View style={styles.circle}>
        <Image
        source={{uri:'https://avatarfiles.alphacoders.com/231/231543.jpg'}}
        style={styles.img}
      />
        </View>
      </View>
      <Text style={styles.text}>BELAJAR</Text>
      <Text style={styles.text}>REACT</Text>
      <Text style={styles.text}>NATIVE</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    backgroundColor:'#6ffc03',
    color:'black',
    textAlign: 'center',
  },
  square:{
    width: width,
    height: 250,
    backgroundColor:'#03a9fc',
    marginTop: 1,
    alignSelf: 'center',
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  circle:{
    width: 150,
    height: 150,
    backgroundColor:'white',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center'   
  },
  text2:{
    color:'black',
    textAlign:'center',
    fontSize: 25,
    backgroundColor: 'yellow',
    textDecorationColor: 'blue',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  img:{
    width: 140,
    height: 140,
    borderRadius: 75,
  },
}
)
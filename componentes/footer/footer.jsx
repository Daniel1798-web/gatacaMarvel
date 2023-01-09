import React from 'react';
import { View, Text, StyleSheet, Linking  } from 'react-native';


const Footer = (props) =>{





const linkMarvel = (index) => {
    Linking.openURL(`${props.hero.urls[index].url}`);

};


 
  if(props.hero?.urls.length > 0){
    return (
      <View style={styles.container}>

        <div style={styles.bottonsUrl}>

        {props.hero.urls.map((item,index) => (
        <Text key={index} style={styles.textButton} onPress={() => Linking.openURL(`${props.hero.urls[index].url}`)}>{item.type}</Text>
      ))}

        </div>

      </View>
    );
  }else{

    return (
      <View style={styles.container}>
        <Text>Dont Have URL</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({



    container:{
        
        width: '100%',
        backgroundColor: 'black',
        boxShadow: 'red 0px 2px 16px',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        color: 'white',

     
    },

    bottonsUrl:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        color: 'white',
        padding: '10px'
    },

    textButton:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: '21px',
      width: '70px',
      maxWidth: '70px',
      paddingLeft: '10px',
      paddingRight: '10px',
      margin: '10px',
      borderRadius: '50px',
      backgroundColor: 'yellow',
      overflowWrap: 'anywhere'
    }
  
});



export default Footer;
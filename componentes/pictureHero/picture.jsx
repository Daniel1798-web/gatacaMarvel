import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PictureHero = (props) =>{

  if(props.hero?.thumbnail.path.length > 0){
    return (
      <View style={styles.containerPic}>
        <Image style={styles.containerPic.pic} source={{ uri: props.hero?.thumbnail.path + `.${props.hero?.thumbnail.extension}`}} />
        <h1 style={styles.containerPic.text}>{props.hero?.name}</h1>
      </View>
    );
  }else{

    return (
      <View>
        <Text>This hero don't have a Photo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
    containerPic:{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: '15px',

        pic:{
            marginLeft:'auto',
            marginRight: 'auto',  
            width:'200px', 
            height:'200px',
            border: '2px solid #fff500',
            borderRadius: '50px'
        },

        text:{
          backgroundColor:'red', 
          width: 'auto', 
          marginLeft: 'auto', 
          marginRight: 'auto',
          border: '2px solid white',
          padding: '5px',
          borderBottomRightRadius: '20px'
        }

    }
     
    
  
    
  });



export default PictureHero;
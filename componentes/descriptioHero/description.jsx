import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Desctiption2 = (props) =>{



  console.log(props.hero?.name); // 'valor'

  if(props.hero?.description.length > 0){
    return (
      <View style={styles.containerText}>
        <Text style={styles.descriptionText}>Description: {props.hero?.description} </Text>
      </View>
    );
  }else{

    return (
      <View style={styles.containerText}>
        <Text style={styles.descriptionText }>This hero don't have a description</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  containerText:{
    display:'flex',
    width: '100%',
    height: '50%',
  
  },

  descriptionText:{
    width: '90%',
    padding: '25px',
    backgroundColor: '#4c4c4c',
    borderTopLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    fontFamily: 'roboto,Trebuchet MS,Helvetica,Arial,sans-serif',
    fontSize: '24px',
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  }

  
});



export default Desctiption2;
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

//components

import Desctiption2 from '../descriptioHero/description';
import PictureHero from '../pictureHero/picture';

 const home = (props) => {
  
  var herosList = props.heros

 
  const [datos, estableceDatos] = useState(herosList[5]);


  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  // Funcion para cambiar de heroe random

  const hero = () => {

    var randomElement = getRandomInt(0,18);

    estableceDatos(herosList[randomElement]);
  }


  //Button hover

  const [isPressed, setIsPressed] = useState(false);


  return (
    <View style={styles.container}>

      <div style={styles.boxButton}>



        <TouchableOpacity

        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}

        style={ [styles.boxButton.button, isPressed ? { boxShadow: '2px 2px 2px #282823, -2px 2px 2px #ffff', opacity: '1'} : null,]}>

        <button onClick={hero}  style={styles.boxButton.button}>Press</button>
      
        </TouchableOpacity>

      </div>

      <PictureHero
        hero = {datos}
      >

      </PictureHero>

        <Desctiption2 
          hero={datos}>

          </Desctiption2>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    padding: '0',
    margin: '0',
    fontFamily: 'roboto,Trebuchet MS,Helvetica,Arial,sans-serif', 
  },

  boxButton:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: "100%",
    height:"100px",
    textAlign: 'center',
    boxShadow : '0px 2px 16px red',


    button:{
      width: '50px',
      height: '50px',
      borderRadius: '50px',
      backgroundColor: 'red',
      marginLeft: 'auto',
      marginRight: 'auto',
      boxShadow: '0px 1px 2px 3px white',
      color: 'white',
      border: 'none'
    },

   
  }

  
});




export default home;
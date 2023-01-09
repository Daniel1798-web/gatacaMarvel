import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FlatList } from 'react-native-web';
import Home from './componentes/home/home';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      loading:false,
      superHeroes: [],
      url: 'http://gateway.marvel.com/v1/public/characters?ts=1000&apikey=c368616265ae68721baaf86d5b5da5db&hash=22baeecea9a16320e1a57cf89c6564d9'
    }
    
  }

  componentDidMount(){
      this.getHeroes();
    
  }



  getHeroes = ()=>{

    this.setState({loading:true})

    fetch(this.state.url)
    .then(res => res.json())
    .then(res => {

        this.setState({
          superHeroes : res.data.results,
          oneHero : res.data.results[5],
          loading : false,
        })
       
    });
  }


  randomHero(){
    state.oneHero = state.superHeroes[2]
  }

     getRandomObjectFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

   

  render() {
    if(this.state.loading){
      return(
        <View style={styles.container}>
          <Text>Download Heroes!</Text>
          <StatusBar style="auto" />
        </View>
        
        );
    }
    return(



        <Home
          style={styles.home}
          heros = {this.state.superHeroes}
          oneHero = {this.state.oneHero}
        ></Home>

   

    
    
    );
  }

  
}

const styles = StyleSheet.create({

  home: {
  
    backgroundColor: 'black',
    color: 'white',
    padding: '0',
    margin: '0',
  },

});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FlatList } from 'react-native-web';
export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      loading:false,
      superHeroes: [],
      url: 'http://gateway.marvel.com/v1/public/characters?ts=1000&apikey=640b6e70babc33bb23cc4f3208aa41db&hash=ad45a5628b415c8dd0a1a6ff6d3ad79a'
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
          loading: false
        })

       
    });

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
    <View style={styles.container}>
      <FlatList 
        data={this.state.superHeroes}
        renderItem={
          ({item}) =><><Text>{item.name}</Text>
          <Image style={styles.logo} source={item.thumbnail.path + `.${item.thumbnail.extension}` }/></>
        }
      />

      
       

    
    </View>
    
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'start',
  },

  logo:{
    width: "100%",
    height:"100px"
  }
});

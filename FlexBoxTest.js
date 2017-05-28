import React,{Component} from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class FlexBoxTest extends Component{
  render(){
    return (
      <View style={ {height:500,borderWidth:1,
        flexDirection:'column',flexWrap:'wrap',
      // justifyContent:'space-around',
      // alignItems:'stretch',
      backgroundColor:"darkgray",marginTop:20}}>
      <View style={ {flex:1,
        width:100,height:40,backgroundColor:"darkcyan",margin:5,
        paddingRight:10,paddingLeft:10,left:20}}>
        {//<Text style={ {fontSize:16}}>1</Text>
      }
        <View style={{backgroundColor:'red',flex:1}}></View>
      </View>
      <View style={ { flex:2,
        width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
        <Text style={ {fontSize:16}}>2</Text>
      </View>
      <View style={ {flex:1,
        width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
        <Text style={ {fontSize:16}}>3</Text>
      </View>
      <View style={ {flex:1,
        width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
        <Text style={ {fontSize:16}}>4</Text>
      </View>
      </View>);
  }
}

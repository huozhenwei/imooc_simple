/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class RefTest extends Component{
  //这样初始化也可以
  // state={
  //   size:100
  // }
  //初始化组件state
  constructor(props){
    super(props);
    this.state = {
      size:80
    }
  }

  getSize(){
    return this.state.size;
  }

  //必须有的方法，代表组件渲染的界面
  render(){
    return <View>
      <Text
      style={{fontSize:20}}
      onPress={()=>{
        this.setState({
          size:this.state.size + 10
        })
      }}>我吹啊，吹啊</Text>
      <Text
      style={{fontSize:20}}
      onPress={()=>{
        this.setState({
          size:this.state.size - 10
        })
      }}>变小，变小</Text>
      <Image
        style={{width:this.state.size,height:this.state.size}}
        source={require('./qiqiu.jpg')} />
    </View>
  };
}

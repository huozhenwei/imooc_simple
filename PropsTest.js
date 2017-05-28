/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class PropsTest extends Component{
  //定义的默认属性
  static defaultProps ={
    name:'小张'
  }

  //对属性进行检查和约束
  static propTypes={
    name:React.PropTypes.string,
    age:React.PropTypes.number,
    sex:React.PropTypes.string.isRequired
  }

  //必须有的方法，代表组件渲染的界面
  render(){
    //访问属性， 属性是由调用方传递或者本组件定义的默认属性
    //this.props.xxx

    return (
      <View>
      <Text style={{fontSize:20}}>姓名: {this.props.name}</Text>
      <Text style={{fontSize:20}}>年龄: {this.props.age}</Text>
      <Text style={{fontSize:20}}>性别: {this.props.sex}</Text>
      </View>
    );

  };
}

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

/**
 *   1. 如何导出一个组件，如何使用导出的组件？
 *   ES6方式，export default 就是导出的语法
 *   使用时候引入，使用 import XxComponent from './XxComponent';
 */
export default class EIComponent extends Component{
  //必须有的方法，代表组件渲染的界面
  render(){
    return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello {this.props.name}</Text>
  };
}

/**
 * 如何导出变量或常量
 */
// export var name = '小米'; //单个导出
var name = '小米';
const age = '22';
export {name,age}; //批量导出


/**
 * 导出方法
 */
export function sum (a,b){
  return a + b;
}

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
 * 创建组件
 * 方式一: ES6
 * 推荐
 * 1、从react包中导入 React、Component
 */
export default class HelloComponent extends Component{
  //必须有的方法，代表组件渲染的界面
  render(){
    return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello {this.props.name}</Text>
  };
}

/**
 * 方式二: ES5
 */
// var HelloComponent = React.createClass({
//   render(){
//     return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello</Text>
//   }
// });
// //导出组件
// module.exports = HelloComponent;

 /**
 * 方式三: 函数式
 * 1、无状态，不能使用this
 * 2、这样的组件没有完整意义的生命周期，本质上是方法
 * 3、是可以访问属性的（props）
 */
// function HelloComponent(props){
//
//     return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello {props.name}</Text>
// }
// //导出函数
// module.exports = HelloComponent;

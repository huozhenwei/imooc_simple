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


export default class ImageTest extends Component{

  //必须有的方法，代表组件渲染的界面
  render(){
    return <View>
      {//1、使用静态图片资源
      }
      <Image style={{width:500,height:100,borderWidth:1}}
      resizeMode={'contain'}
      source={require('./qiqiu.jpg')}/>

      {/*2、使用网络图片资源, 网络获取图片要指定width 和 height
      */}
      <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
      style={{width: 100, height: 100,borderWidth:1}}/>

      {/*3、如何使用原生图片资源？  原生图片资源 就是ios 或者Android项目的资源
          a、也是需要指定width 和 height
          b、图片存放位置， 要重新编译
          ios 用xcode打开，放到ios/imooc_simple/Images.xcassets 目录下
          Android 放到 imooc_simple/android/app/src/main/res/drawable-xxhdpi 目录下
          注意安装环境下 RN只能显示 drawable开头目录下的资源
      */}
      <Image source={{uri: 'billpay'}}
      style={{width: 100, height: 100,borderWidth:1}}/>


    </View>
  };
}

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

export default class LifecycleComponent extends Component{
  //当组件初始化，会调用
  constructor(props){
    super(props); //因为继承Component 先让父组件完成初始化
    console.log('---constructor---');
    this.state = {
      count:0
    }
  }

  //组件将要被装载
  componentWillMount(){
    console.log('---componentWillMount---');
  }
  //组件装载完毕
  componentDidMount(){
    console.log('---componentDidMount---');
    //进行数据请求
  }

  //组件在更新时候调用
  componentWillReceiveProps(nextProps){
    console.log('---componentWillReceiveProps---');
  }

  //组件是不是要更新
  shouldComponentUpdate(nextProps,nextState){
    console.log('---shouldComponentUpdate---');
    return true;
    //通过返回值来控制组件是否重新渲染
  }

  //组件被更新之前
  componentWillUpdate(nextProps,nextState){
    console.log('---componentWillUpdate---');
  }
  //组件被更新之后
  componentDidUpdate(prevProps,prevState){
    console.log('---componentDidUpdate---');
  }

  //组件移除之前
  componentWillUnmount(){
    console.log('---componentWillUnmount---');
    //进行回收、释放资源操作
  }


  //必须有的方法，代表组件渲染的界面
  render(){
    console.log('---render---');
    return <View>
      <Text style={{fontSize:20,backgroundColor:'red'}}
      onPress={()=>{
        this.setState({
          count: this.state.count + 1
        });
      }} >click me.</Text>
      <Text style={{fontSize:20}}>
        点击了 {this.state.count} 次
      </Text>
    </View>
  };
}

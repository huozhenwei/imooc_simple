/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HelloComponent from './HelloComponent';
import LifecycleComponent from './LifecycleComponent';
//使用导出的变量、常量
import EIComponent,{name, age , sum} from './EIComponent';

import PropsTest from './PropsTest';
import StateTest from './StateTest';
import RefTest from './RefTest';

import Student from './Student';
import MingStudent from './MingStudent';

import FlexBoxTest from './FlexBoxTest';
import TouchableTest from './TouchableTest';
import ImageTest from './ImageTest';

//app启动之后， 运行Android和iOS都会走到这里， 这样在setup中的修改在两种设备上都会有效
export default class setup extends Component {

  constructor(props){
    super(props);
    this.state = {
      remove:false,
      result:'',
      size:0
    };
    //实例化 Student
    this.stu = new Student('小红','女','20');
    //获取 MingStudent实例
    this.ming = new MingStudent();
  }

  render() {
    var view = this.state.remove?null:<LifecycleComponent/>;
    var text = this.state.remove?"让他复活":"干掉他";

    var params = {name:'小李',age:26,sex:'男性'};
    var {name,sex} = params; //从一组属性里获取指定属性
    return (
      <View style={styles.container}>

      <ImageTest/>
      
      <TouchableTest/>

      <Text style={{fontSize:20}}>FlexBoxTest</Text>
      <FlexBoxTest/>

        {/*解构赋值 */}
        <PropsTest
        name={name} sex={sex}/>

        <Text style={{fontSize:20}}
        onPress={()=>{
          this.setState({
            remove:!this.state.remove
          })
        }}>{text}
        </Text>
        {view}
        <Text style={{fontSize:20}}>
        {name} 今年 {age}岁
        </Text>
        <Text style={{fontSize:20}} onPress={()=>{
          var res = sum(1000,1);
          this.setState({
            result:res
          });
        }}>
        测试导出方法: 1000+1 = {this.state.result}
        </Text>

        <PropsTest name="小明" sex='女'/>

        {/*es6延展操作符 */}
        <PropsTest {...params}/>

        {//<StateTest/>
        }

        <Text
        style={{fontSize:20}}
        onPress={()=>{
          // this.refs.refTest
          // this.refs['refTest']
          // var size = this.refs.refTest.getSize();
          var size = this.refs['refTest'].getSize();
          this.setState({
            size:size
          })
        }}>
        获取气球大小: {this.state.size}</Text>

        <RefTest ref="refTest"/>

        <Text style={{fontSize:20}}>创建对象:{this.stu.getDescription()}</Text>

        <Text style={{fontSize:20}}>{this.ming.getDescription()}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop:50
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

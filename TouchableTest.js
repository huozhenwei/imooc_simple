import React,{Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Alert,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';

export default class TouchableTest extends Component{

  constructor(props){
    super(props);
    this.state = {
      count: 0,
      text:''
    }
  }

  render(){
    return <View>
    <TouchableWithoutFeedback
        onPress={()=> {
            this.setState({count: this.state.count+1})
        }}
        onLongPress={()=>{
          Alert.alert(
            '提示',
            '确定要删除吗?',
            [
              {text:'取消',onPress:()=>{},style:'cancel'},
              {text:'确定',onPress:()=>{}}
            ]);
        }}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>
                我是TouchableWithoutFeedback,单击我
            </Text>
        </View>
    </TouchableWithoutFeedback>
    <Text style={styles.text}>您单击了:{this.state.count}次</Text>

    <TouchableWithoutFeedback
        disabled={this.state.waiting}
        onPress={()=> {
            this.setState({text:'正在登录...',waiting:true})
            setTimeout(()=>{
                this.setState({text:'网络不流畅',waiting:false})
            },2000);
        }}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>
               登录
            </Text>
        </View>
    </TouchableWithoutFeedback>
    <Text style={styles.text}>{this.state.text}</Text>

    <TouchableHighlight
      style={styles.button}
      activeOpacity={0.7}
      underlayColor='green'
      onHideUnderlay={()=>{
          this.setState({text:'衬底被隐藏'})
      }}
      onShowUnderlay={()=>{
          this.setState({text:'衬底显示'})
      }}
      onPress={()=>{

      }}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>
                TouchableHighlight
            </Text>
        </View>
    </TouchableHighlight>
    <Text style={styles.text}>{this.state.text}</Text>

    {/*只在安卓上有效果

    <TouchableNativeFeedback
      onPress={()=>{
          this.setState({count: this.state.count + 1})
      }}
      background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={styles.button}>
          <Text>TouchableNativeFeedback</Text>
      </View>
    </TouchableNativeFeedback>
    <Text style={styles.text}>{this.state.text}</Text>*/}

    </View>
  }
}

const styles = StyleSheet.create({
  button:{
    borderWidth:1,
    borderRadius:5
  },
  buttonText:{
    fontSize:18
  },
  text:{
    fontSize:20
  }
});

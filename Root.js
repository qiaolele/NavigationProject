/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @info: 程序入口
 */
import React, {Component} from 'react';
import {AppRegistry,View} from 'react-native';
import App from './app/app';



export default class Root extends Component {
    constructor(props) {
        super(props);

    }
    render(){
        return (
            // 一个出口只能导出一个View组件，如果使用flex布局，最大容器一定要设置flex
            // 如果此时只有一个组件，就可以不要外面的View组件容器
            <View>
              <App></App>
            </View>
        );
    }
};


// 注意，这里用引号括起来的'AwesomeProject1'必须和你init创建的项目名一致
//这个是整个项目的出口文件只能有一个
AppRegistry.registerComponent('NavigationProject', () => Root);

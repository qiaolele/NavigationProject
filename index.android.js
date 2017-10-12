
import {AppRegistry,View,Text} from 'react-native';
import React, {Component} from 'react';
import App from './app/app';
export default class Root extends Component {
    constructor (props) {
        super(props);
    }

    render(){
        return (
            <View>

                <App />
                {/*<App1 />*/}
            </View>
        );
    }
};


// 注意，这里用引号括起来的'AwesomeProject1'必须和你init创建的项目名一致
//这个是整个项目的出口文件只能有一个
AppRegistry.registerComponent('NavigationProject', () => App);
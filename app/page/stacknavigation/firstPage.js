import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import { StackNavigator } from "react-navigation";
import SecondScreen from './secondPage';
import ThirdScreen from './thirdPage';

class FirstScreen extends Component {
    static navigationOptions = {
        title: 'FirstPage',//在导航中显示的标题内容
    };
    render() {
        //这里可以是导入的其他组件
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>这是第一个页面</Text>
                <Button
                    onPress={() => navigate('Second',{user: 'Lucy'})}
                    title="点我跳转到第二个页面"
                />
            </View>
        )
    }
}
//进行导航的注册
const SimpleApp = StackNavigator({
    First: { screen: FirstScreen },
    Second: { screen: SecondScreen },//新添加的screen
    Third: {screen: ThirdScreen}
});

module.exports = SimpleApp;



import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';
import { StackNavigator } from "react-navigation";
import DetailPagDe from './detailPage';
class MinePage extends Component {
    static navigationOptions = {
        title: 'MinePage',//在导航中显示的标题内容
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => navigate('Detail', { user: 'Lucy' })}
                    title="跳转+传参"
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width:20,
        height:20
    }
});
//进行导航的注册
const SimpleApp = StackNavigator({
    MinePage: {screen: MinePage},
    Detail: {screen: DetailPagDe},
});
module.exports = SimpleApp;
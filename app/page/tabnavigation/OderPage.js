import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';
import { NavigationActions } from 'react-navigation'
export default class OderPage extends Component {
    static navigationOptions = {
        title: '订单',
        tabBarLabel: '订单',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../images/cert0.png')}
                style={[styles.icon,{tintColor: tintColor} ]}
            />
        ),
    };
    goToDetail() {
        // 使用reset action重置路由
        const {dispatch} = this.props.navigation;
        const resetAction = NavigationActions.reset({
            index: 0,//指定显示数组内的路由// 注意不要越界
            actions: [
                NavigationActions.navigate({ routeName: 'Detail',params:{user: 'xiongtm'}}),// 栈里的路由信息会从 Home->HomeTwo 变成了 Bill->BillTwo
                //NavigationActions.navigate({ routeName: 'others',params:{user: 'xiongtm'}}),
            ]
        });
        dispatch(resetAction);
    }
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => this.goToDetail()}
                    title="跳转+传参+清空路由"
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

import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
class ChatScreen extends Component {
    // 必须用箭头函数写navigation，否则报错
    static navigationOptions = ({navigation,screenProps}) => ({
        title: `SecondPage——Params is ${navigation.state.params.user}`,
        headerRight: (
            <Button title="Info"/>
        ),
        headerStyle: styles.headerStyle
    });
    render() {
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>这是第二个页面，参数是——{params.user}</Text>
                <Button
                    onPress={() => navigate('Third')}
                    title="点我跳转到第三个页面"

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        paddingRight: 10,
    }
});
module.exports = ChatScreen;
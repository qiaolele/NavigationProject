import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';
class detailPage  extends Component {
    static navigationOptions = ({navigation,screenProps}) => ({
        title: 'welcome',
    });
    render() {

        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Text>这是第二个页面，参数是——{params.user}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
module.exports = detailPage;
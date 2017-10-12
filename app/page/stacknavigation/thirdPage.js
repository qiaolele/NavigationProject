import React, {Component} from 'react';
import {
    Button,
} from 'react-native';
class ThreeScreen extends Component {
    static navigationOptions = {
        title: 'ThreePage',
    };
    render() {
        const { goBack } = this.props.navigation;
        return (
            <Button
                title="Go back"
                onPress={() => goBack()}
            />
        );
    }
}

module.exports = ThreeScreen;
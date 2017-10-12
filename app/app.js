import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import StackNavigation from './page/stacknavigation/firstPage';
import TabNavigation from './page/tabnavigation/TabPages';
import DrawerNavigation from './page/drawernavigation/DrawPage';


export default class Root1 extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                {/*导航器StackNavigation*/}
                {/*<StackNavigation></StackNavigation>*/}
                {/*导航器TabNavigation*/}
                <TabNavigation></TabNavigation>
                {/*导航器抽屉DrawerNavigation*/}
                {/*<DrawerNavigation></DrawerNavigation>*/}
            </View>
        )
    }
}


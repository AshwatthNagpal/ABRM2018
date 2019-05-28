import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,
    ScrollView,

} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation'
import Myheader from '../../component/MyHeader';
import MyTabBar from '../../component/mytabbar';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
export default class ConferenceAgenda extends Component {
    static navigationOptions = { header: null }



    render() {
        return (
            <View>
                <ImageBackground style={styles.imgbck} source={require('../../images/37.png')}>
                    <Myheader title={'CONFERENCE AGENDA-ABRM 2018'} onpress={() => this.props.navigation.pop()} />
                    <CSN />
                </ImageBackground>
            </View>

        );
    }
}

styles = StyleSheet.create({
    imgbck: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    tabbar: {
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width,
        height: 60,
        marginBottom: 18
    },
    label: {
        fontSize: 15,

    }
});


const CSN = createMaterialTopTabNavigator({
    first: FirstScreen,
    second: SecondScreen,
},
    {
        initialRouteName: 'first',
        backBehavior: 'none',
        order: ['first', 'second'],
        swipeEnabled: true,
        tabBarOptions: {
            style: styles.tabbar,
            indicatorStyle: {
                backgroundColor: 'transparent',

            },

            labelStyle: styles.label
        }
    }
);
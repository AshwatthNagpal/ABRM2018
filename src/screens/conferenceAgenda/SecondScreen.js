import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    ImageBackground,
    Dimensions,
    ToastAndroid,
    StyleSheet,
} from 'react-native';
import { AsyncStorage } from 'react-native';
import MyFetch from '../../fetchapi/FETCH';
export default class SecondScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Day 2 \n 12 Apr 18'
    }

    constructor(props) {
        super(props)
        this.state = {
            d: {}
        }

        AsyncStorage.getItem('token').then(tok => {
            MyFetch.GetConferenceAgenda(tok).then(d => {
                if (d.status)
                    this.setState({ d: d.data[1] });
                else
                    ToastAndroid.show("SomeThing Went Wrong try again", ToastAndroid.SHORT);
            });
        });
    }

    _keyextractor = (index, item) => { item.time }
    _renderitem = ({ item }) => (

        <View style={styles.v} >
            <View alignItems={'center'}>
                <View style={styles.v2} />
                <View style={styles.v3} />
            </View>
            <View marginLeft={10}>
                <Text style={styles.text1}>{item.schedule}</Text>
                <Text style={styles.text2}>{item.time}</Text>
                <Text style={styles.text2}>{item.venue}</Text>
            </View>
        </View>
    );

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.d['agenda']}
                    keyExtractor={this._keyextractor}
                    renderItem={this._renderitem}
                />
            </View>

        );
    }

}
const styles = StyleSheet.create({
    v: {
        marginLeft: 12,

        flexDirection: 'row'
    },
    v2: {
        width: 15,
        borderRadius: 15,
        marginRight: 7,
        height: 15,
        backgroundColor: '#ffffff',
    },
    v3: {
        width: 4,
        marginRight: 7,
        height: 90,
        backgroundColor: '#ffffff',
    },
    text1: {
        fontSize: 14,
        color: "#ffffff",
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 12,
        color: "#bf5305"

    }

});
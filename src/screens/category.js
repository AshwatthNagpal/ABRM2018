import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Alert,
    ImageBackground,
    Dimensions,
    Text,
    View,
    Image,
    ToastAndroid,
    FlatList,
} from 'react-native';
import MyFetch from '../fetchapi/FETCH';

import { AsyncStorage } from "react-native"
export default class Category extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            d: [
                {
                    key: 1,
                    loc: require('../images/icons/WELCOMEMESSAGE.png'),
                    title: 'WELCOME MESSAGE'
                }, {
                    key: 2,
                    loc: require('../images/icons/DRESSCODE.png'),
                    title: 'DRESS CODE'
                }, {
                    key: 3,
                    loc: require('../images/icons/ABOUTBANGKOK.png'),
                    title: 'ABOUT BANGKOK'
                }, {
                    key: 4,
                    loc: require('../images/icons/GOOGLEMAPFORHOTEL.png'),
                    title: 'GOOGLE MAP FOR HOTEL'
                }, {
                    key: 5,
                    loc: require('../images/icons/CONFERENCEAGENDA.png'),
                    title: 'CONFERENCE AGENDA'
                }, {
                    key: 6,
                    loc: require('../images/icons/TRAVELSCHEDULE.png'),
                    title: 'TRAVEL DETAILS'
                }, {
                    key: 7,
                    loc: require("../images/icons/DOSANDDONTS.png"),
                    title: "DO'S AND DONT'S"
                }, {
                    key: 8,
                    loc: require('../images/icons/EMERGENCYCONTACT.png'),
                    title: 'EMERGENCY CONTACT DETAILS'
                }, {
                    key: 9,
                    loc: require('../images/icons/CURRENCYCONVERSION.png'),
                    title: 'CURRENCY CONVERSION'
                }, {
                    key: 10,
                    loc: require('../images/icons/WORLDCLOCK.png'),
                    title: 'WORLD CLOCK'
                }, {
                    key: 11,
                    loc: require('../images/icons/PLACESTOVISIT.png'),
                    title: 'PLACES TO VISIT'
                }, {
                    key: 12,
                    loc: require('../images/icons/QUESTIONS.png'),
                    title: 'QUESTIONS'
                }, {
                    key: 13,
                    loc: require('../images/icons/FEEDBACK.png'),
                    title: 'FEEDBACK'
                }, {
                    key: 14,
                    loc: require('../images/icons/WEATHER.png'),
                    title: 'WEATHER'
                }, {
                    key: 15,
                    loc: require('../images/icons/NOTIFICATION.png'),
                    title: 'NOTIFICATIONS'
                }, {
                    key: 16,
                    loc: require('../images/icons/LOGOUT.png'),
                    title: 'LOG OUT'
                }
            ],
            token: "",
            id: ""
        }
        AsyncStorage.getItem('id').then(i => this.setState({ id: i.toString() }));
        AsyncStorage.getItem('token').then(tok => this.setState({ token: tok.toString() }));
    }



    _keyextractor = (item, index) => { item.key }
    _renderItem = ({ item }) => (
        <View style={styles.con}
        >
            <TouchableOpacity
                onPress={() => {
                    if (item.key != 16) {

                        this.props.navigation.push("a" + item.key, {
                            token: this.state.token,
                            id: this.state.id
                        });
                    } else {
                        Alert.alert(
                            "Log Out",
                            "Are you sure?",
                            [
                                {
                                    text: 'OK', onPress: () => {
                                        MyFetch.LogOut(this.state.id, this.state.token).then(res => {
                                            ToastAndroid.show(res.message, ToastAndroid.SHORT);
                                            AsyncStorage.clear();
                                            this.props.navigation.push('login');
                                        })
                                    }

                                },
                                { text: 'Cancel', onPress: () => { }, style: 'cancel' },
                            ]);

                    }
                }}
            >
                <Image
                    style={styles.img}
                    source={item.loc} />

                <Text
                    style={styles.text}
                >{item.title}</Text>
            </TouchableOpacity>
        </View>
    )
    render() {
        let { w, h } = Dimensions.get('window');
        return (
            <ImageBackground style={styles.imgback} source={require('../images/5.png')}>
                <View style={styles.v}>
                    <FlatList

                        data={this.state.d}
                        numColumns={3}
                        keyExtractor={this._keyextractor}
                        renderItem={this._renderItem}
                    />
                </View>
            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
    imgback: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center'
    },
    v: {
        width: Dimensions.get('window').width - 30,
        height: Dimensions.get('window').height,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
    },

    img: {
        width: 75,
        height: 75,

    },
    text: {
        height: 40,
        width: 75,
        fontSize: 9,
        color: "#ffffff",
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 7

    },
    con: {
        width: (Dimensions.get('window').width / 3) - 30,
        height: 120,
        marginLeft: 10,
        marginTop: 15,
        marginRight: 10,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
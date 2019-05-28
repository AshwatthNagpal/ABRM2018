import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    Text,
    FlatList,
    ToastAndroid,
    View,
} from 'react-native';
import MyFetch from '../fetchapi/FETCH'
import Myheader from '../component/MyHeader'
export default class Notifications extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            d: [{}],
            total: 0,
            more: 0,
            page: 1,
        }
        const { navigation } = this.props;
        MyFetch.getNotifications(navigation.getParam('id', 0), navigation.getParam('token', 0), this.state.page).then(res => {
            if (res.status)
                this.setState({ d: res.data, total: res.total, more: res.more });
            else
                ToastAndroid.show(res.message, ToastAndroid.SHORT);
        })

    }
    _onPress = (i) => {
        let { navigation } = this.props;
        navigation.navigate('noti', {
            id: navigation.getParam('id', 0),
            token: navigation.getParam('token', 0),
            nid: i

        })
    }
    _keyExtractor = (item, index) => { item.notification_id }
    _renderitem = ({ item }) => (
        <View style={styles.v}>
            <TouchableOpacity onPress={() => this._onPress(item.notification_id)}>
                <Text style={styles.text1}>-{item.notification}</Text>
                <Text style={styles.text2}>{item.date_added}</Text>
            </TouchableOpacity>
        </View>

    )
    render() {
        return (
            <View>
                <ImageBackground source={require('../images/42.png')} style={styles.imgbck} >
                    <Myheader title={'NOTIFICATIONS'} onpress={() => { this.props.navigation.pop() }} />
                    <FlatList
                        data={this.state.d}
                        renderItem={this._renderitem}
                        keyExtractor={this._keyExtractor}
                    />
                </ImageBackground>
            </View>

        );

    }

}

const styles = StyleSheet.create({
    imgbck: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    v: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        borderBottomColor: '#929599',
        borderBottomWidth: 1
    },
    text1: {
        marginTop: 4,
        marginBottom: 4,
        marginLeft: 4,
        marginRight: 4,
        color: '#454749',
        fontSize: 16,
        fontWeight: 'bold'
    },
    text2: {
        marginTop: 4,
        marginBottom: 4,
        marginLeft: 4,
        marginRight: 4,
        color: '#454749',
        fontSize: 12,
        textAlign: 'right'
    },
})
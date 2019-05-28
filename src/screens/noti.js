import React, { Component } from 'react';
import {
    ImageBackground,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Myheader from '../component/MyHeader';
import MyFetch from '../fetchapi/FETCH';
import PinchZoomView from 'react-native-pinch-zoom-view';
export default class Noti extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            isV: 'false'
        }
        MyFetch.getNotificationById(this.props.navigation.getParam('id', 0), this.props.navigation.getParam('token', 0), this.props.navigation.getParam('nid', 0)).then(
            d => this.setState({ data: d.data, isV: true })
        )
    }

    render() {
        var image;
        if (this.state.isV) {
            let s = this.state.data.notification_img + "";
            image = (
                <PinchZoomView>
                    <Image source={{ uri: s }} style={styles.img} />
                </PinchZoomView>
            )
        }
        return (
            <ImageBackground source={require('../images/41.png')} style={styles.imgbck}>
                <Myheader title={'NOTIFICATION'} onpress={() => { this.props.navigation.pop() }} />
                <Text style={styles.text}>{this.state.data.notification}</Text>
                <View height={200}>
                    {image}
                </View>
            </ImageBackground>

        )
    }
}
const styles = StyleSheet.create({
    imgbck: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10
    },
    img: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 100
    }
});






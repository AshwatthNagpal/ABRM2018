import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,
    ScrollView,

} from 'react-native';
import DOMParser from 'react-native-html-parser';
import Decode from 'decode-html';
import MyFetch from '../fetchapi/FETCH';
import HTML from 'react-native-render-html';
import Myheader from '../component/MyHeader';
export default class AboutBangkok extends Component {
    static navigationOptions = {
        headerStyle: {
            position: 'absolute',
            top: 0,
            left: 0
        },
        headerBackTitleStyle: {
            opacity: 0,
        },
        headerTintColor: '#fff'
    }
    constructor(props) {
        super(props)
        this.state = {
            h: '',
            d: ''
        }
        const { navigation } = this.props;
        const parser = new DOMParser.DOMParser();
        MyFetch.getCategoryDataById(navigation.getParam('token', 0), 2).
            then(d => {
                try {
                    let htm = Decode(d.data['node_desc']);
                    const parsed = parser.parseFromString(htm, 'text/html');
                    this.setState({ h: parsed, d: d.data['node_desc'] });

                }
                catch (error) { }
            }
            );

    }
    render() {
        return (

            <ImageBackground
                style={styles.imgback}
                source={require('../images/loginpic.png')}>
                <Myheader title={'ABOUT BANGKOK'}
                    onpress={() => { this.props.navigation.pop() }} />
                <ScrollView>
                    <View marginLeft={15} marginRight={10}>

                        <HTML html={this.state.h} />
                    </View>
                </ScrollView>
            </ImageBackground>


        );
    }

}
const styles = StyleSheet.create({
    imgback: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flex: 1
    },
    textwhite: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        color: '#ffffff',
        fontSize: 15,
    },
    textyellow: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        color: '#ffe900',
        fontSize: 15,
    }


})
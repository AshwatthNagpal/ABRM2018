import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    ScrollView,
    View
} from 'react-native';
import Myheader from '../component/MyHeader'
import MyFetch from '../fetchapi/FETCH';
import HTML from 'react-native-render-html';
import { AsyncStorage } from 'react-native'
import DOMParser from 'react-native-html-parser';
import Decode from 'decode-html'
export default class WelcomeMessage extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props)
        this.state = {
            data: '',
        }

        const parser = new DOMParser.DOMParser();
        MyFetch.getCategoryDataById(this.props.navigation.getParam('token', 0), 1).then(d => {

            this.setState({ data: d.data["node_desc"] });
        });
    }


    render() {
        let { w, h } = Dimensions.get('window');
        return (


            <ImageBackground
                style={{ width: w, height: h, flex: 1 }}
                source={require('../images/19.png')}
            >
                <Myheader title={'WELCOME MESSAGE'}
                    onpress={() => { this.props.navigation.pop() }} />

                <ScrollView>
                    <Text style={styles.tex}>{this.state.data}</Text>

                </ScrollView>

            </ImageBackground >

        );
    }
}
const styles = StyleSheet.create({
    tex: {
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 15,
        color: '#ffffff'
    },

})
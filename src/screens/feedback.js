import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    Dimensions,
    Text,
    View,
    FlatList,
    ToastAndroid
} from 'react-native';
import Rating from 'react-native-rating'
import MyFetch from '../fetchapi/FETCH';
import { Easing } from 'react-native'
export default class FeedBack extends Component {

    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = {
            que: [],
            questions: [{}]
        }
        MyFetch.getQuestions(this.props.navigation.getParam('token', 0)).
            then(d => this.setState({ que: d.data }));
    }

    _keyextractor = (item, index) => { item.qid }
    _onpress = (arra) => {

        this.setState({ questions: arra })
        let { navigation } = this.props;
        MyFetch.saveUserFeedback(navigation.getParam("token", 0), navigation.getParam("id", 0), this.state.questions).
            then(d => {
                ToastAndroid.show(d.message, ToastAndroid.SHORT)
                this.props.navigation.pop();
            });

    }

    render() {
        let arra = [{}];
        let { w, h } = Dimensions.get('window');
        return (
            <View>
                <ImageBackground alignItems={'center'}
                    style={styles.imgbck}
                    source={require("../images/34.png")}>
                    <Myheader title={'FEEDBACK'}
                        onpress={() => { this.props.navigation.pop() }} />
                    <View height={h / 2}>
                        <FlatList
                            data={this.state.que}
                            renderItem={({ item }) => (
                                <View>
                                    <Text style={styles.heading}>{item.question}</Text>
                                    <View alignItems={'center'}>
                                        <Rating
                                            onChange={rating => {
                                                let index = parseInt(item.qid);
                                                arra[index] = {
                                                    qid: item.qid,
                                                    rate: rating,
                                                }

                                            }}
                                            selectedStar={require('../images/star.png')}
                                            unselectedStar={require('../images/TransparentStar.png')}
                                            config={{
                                                easing: Easing.inOut(Easing.ease),
                                                duration: 350
                                            }}
                                            stagger={80}
                                            maxScale={1.4}
                                            starStyle={{
                                                width: 30,
                                                height: 30
                                            }}
                                        />
                                    </View>
                                </View>
                            )}
                            keyExtractor={this._keyextractor}
                        />
                    </View>
                    <TouchableOpacity onPress={() => this._onpress(arra)}>
                        <Text style={styles.but}>SUBMIT</Text>
                    </TouchableOpacity>

                </ImageBackground>
            </View>

        );
    }

}
const styles = StyleSheet.create({
    imgbck: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,

    },
    heading: {
        color: '#ffffff',
        fontSize: 19,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'center'
    },
    but: {
        color: '#000000',
        backgroundColor: '#f4d400',
        fontSize: 20,
        width: 100,
        height: 40,
        marginTop: 10,
        textAlign: 'center',
        alignSelf: 'center',
        textAlignVertical: 'center',

    }
})
import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ToastAndroid,

} from 'react-native';
import MyFetch from '../fetchapi/FETCH'
export default class Questions extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = {
            que: ''
        }
    }
    _onpress() {

        const { navigation } = this.props;
        MyFetch.saveUserQuestion(navigation.getParam('token', 0), navigation.getParam('id', 0), this.state.que).
            then(d => {
                ToastAndroid.show(d.message, ToastAndroid.SHORT);
                if (d.status)
                    navigation.pop();

            })
    }
    render() {
        return (
            <View flex={1} >
                <ImageBackground
                    style={styles.imgback}
                    source={require('../images/43.png')} >

                    <Myheader title={'ASK QUESTIONS'}
                        onpress={() => { this.props.navigation.pop() }} />

                    <View style={styles.v}>
                        <TextInput
                            style={styles.textinput}
                            placeholder={"Enter Question"}
                            multiline={true}
                            placeholderTextColor={"#ffffff"}
                            underlineColorAndroid={'transparent'}
                            onChangeText={(text) => { this.setState({ que: text }) }}
                        />
                    </View>

                    <TouchableOpacity onPress={() => this._onpress()}>
                        <Text style={styles.button}>
                            Submit
                          </Text>
                    </TouchableOpacity>

                </ImageBackground>




            </View>


        );
    }
}

const styles = StyleSheet.create({
    imgback: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,

    },
    v: {
        width: Dimensions.get('window').width - 26,
        height: 120,
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 15,
        borderWidth: 3,
        alignSelf: 'center',
        borderColor: "#ffffff"
    },
    textinput: {
        fontSize: 20,
        color: '#ffffff',

    },
    button: {
        width: 100,
        height: 50,
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#fffa00',
        color: '#000000',
        alignSelf: 'center',
        fontWeight: 'bold'

    }
})
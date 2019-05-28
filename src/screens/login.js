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
    BackHandler,
    ActivityIndicator,
    ToastAndroid
} from 'react-native';
import MyFetch from '../fetchapi/FETCH'
import CodeInput from 'react-native-confirmation-code-input';
import { AsyncStorage } from "react-native"

const devicetype = Platform.select({
    ios: 2,
    android: 1,
});



export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = {
            mob: '',
            res: {},
            isa: true,
            OTP: '',
            isModVis: false,
            bh: {}
        }


    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => { BackHandler.exitApp(); })
    }
    componentWillUnmount() {
        this.backHandler.remove();
    }
    _onpress1 = () => {
        this.setState({ isModVis: true });
        MyFetch.getOtp(this.state.mob).then(d => {

            if (d.status)

                this.setState({ isa: false });

            else {
                this.setState({ isModVis: false });
                ToastAndroid.show(d.message, ToastAndroid.SHORT);
            }
        }
        )
    }

    _onpress2 = () => {
        MyFetch.verifyOtp(this.state.OTP, this.state.mob, devicetype).then(
            d => {
                if (d.status) {

                    for (s in d.data)
                        AsyncStorage.setItem(s, d.data[s] + '');
                    this.props.navigation.navigate('cat');
                }
                else
                    ToastAndroid.show(d.message, ToastAndroid.SHORT);
            }
        );

    }

    _onpress3 = () => {
        MyFetch.ResendOtp(this.state.mob).then(d => {
            if (d.status)
                ToastAndroid.show(d.message, ToastAndroid.SHORT);
            else
                ToastAndroid.show(d.message, ToastAndroid.SHORT);
        })

    }
    componentDidMount() {
        this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => { BackHandler.exitApp(); })
    }
    componentWillUnmount() {
        this.backHandler.remove();
    }

    render() {
        let { w, h } = Dimensions.get('window');
        if (this.state.isa)
            return (
                <View flex={1}>
                    <ImageBackground style={{ width: w, height: h, flex: 1, justifyContent: 'center' }} source={require('../images/loginpic.png')}>

                        <TextInput style={styles.textinput}
                            maxLength={10}
                            autoFocus={true}
                            textContentType={'telephoneNumber'}
                            underlineColorAndroid={'#ffffff'}
                            placeholder={'MOBILE NUMBER'}
                            placeholderTextColor={"#ffffff"}
                            onChangeText={(text) => { this.setState({ mob: text }) }}
                            keyboardType={'phone-pad'} />
                        <TouchableOpacity onPress={this._onpress1}>
                            <Text style={styles.button}>LOGIN</Text>
                        </TouchableOpacity>

                        <ActivityIndicator
                            animating={this.state.isModVis}
                            color={"#eaedf2"}
                            size={'large'}
                            hidesWhenStopped={true}
                        />
                    </ImageBackground>
                </View>
            );
        else
            return (
                <View flex={1} >
                    <ImageBackground style={{ width: w, height: h, flex: 1, justifyContent: 'center' }} source={require('../images/loginpic.png')}>

                        <Text style={styles.text1}>OTP DETAILS</Text>
                        <Text style={styles.text2}>Enter security code that was setd to your mobile and email</Text>
                        <Text style={styles.text2}>The code is valid for 3 minutes only</Text>
                        <View width={w - 40} height={80}>
                            <CodeInput
                                className={'border-b'}
                                space={8}
                                keyboardType={'numeric'}
                                size={40}
                                codeLength={6}
                                inputPosition='center'
                                onFulfill={(code) => this.setState({ OTP: code })}
                            />
                        </View>
                        <TouchableOpacity onPress={this._onpress3}>
                            <Text style={styles.text1}>Request a new security code</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._onpress2}>
                            <Text style={styles.button1}>SUBMIT</Text>
                        </TouchableOpacity>

                    </ImageBackground>

                </View>



            );
    }
}

const styles = StyleSheet.create({
    textinput: {
        width: 250,
        height: 80,
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        color: '#ffffff'
    },
    button: {
        width: 130,
        height: 40,
        fontSize: 25,
        alignSelf: 'center',
        backgroundColor: '#f2ee2b',
        color: '#000000',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 15,
        fontWeight: 'bold'
    },
    button1: {
        width: 130,
        height: 40,
        fontSize: 25,
        marginTop: 15,
        alignSelf: 'center',
        backgroundColor: '#f2ee2b',
        textAlignVertical: 'center',
        color: '#000000',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    text1: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 10,
        textAlign: 'center',
    },
    text2: {
        fontSize: 20,
        alignSelf: 'center',

        textAlign: 'center',
        color: '#ffffff'
    }
})
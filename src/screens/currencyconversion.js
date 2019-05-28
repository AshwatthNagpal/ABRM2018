import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ImageBackground,
    Dimensions,
    TextInput,
    View,
    Text,
    Image
} from 'react-native';

export default class CurrencyConversion extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            money: '',
            current: 1,
            inr: "#ffe900",
            us: '',
            yen: '',
            converted: '0.00',
            bc1: '#ffe900',
            bc2: '#ffffff',
            bc3: '#ffffff',
            fc1: '#000000',
            fc2: '#ffffff',
            fc3: '#ffffff',
            rate: 0.48,
            show: true
        }
    }
    changecolor(num) {
        if (this.state.show)
            switch (num) {
                case 1:

                    this.setState({
                        rate: 0.48,
                        converted: (this.state.money * 0.48).toFixed(2),
                        inr: "#ffe900",
                        us: 'transparent',
                        yen: 'transparent',
                        bc1: '#ffe900',
                        bc2: '#ffffff',
                        bc3: '#ffffff',
                        fc1: '#000000',
                        fc2: '#ffffff',
                        fc3: '#ffffff',
                        current: 1,
                    })
                    break;
                case 2:

                    this.setState({
                        rate: 33.12,
                        converted: (this.state.money * 33.12).toFixed(2),
                        inr: "transparent",
                        us: '#ffe900',
                        yen: 'transparent',
                        bc1: '#ffffff',
                        bc2: '#ffe900',
                        bc3: '#ffffff',
                        fc1: '#ffffff',
                        fc2: '#000000',
                        fc3: '#ffffff',
                        current: 2,
                    })

                    break;
                case 3:

                    this.setState({
                        rate: 0.3,
                        converted: (this.state.money * 0.3).toFixed(2),
                        inr: "transparent",
                        us: 'transparent',
                        yen: '#ffe900',
                        bc1: '#ffffff',
                        bc2: '#ffffff',
                        bc3: '#ffe900',
                        fc1: '#ffffff',
                        fc2: '#ffffff',
                        fc3: '#000000',
                        current: 3,
                    })
                    break;

            }
        else
            switch (num) {
                case 1:

                    this.setState({
                        rate: 2.07,
                        converted: (this.state.money * 2.07).toFixed(2),
                        inr: "#ffe900",
                        us: 'transparent',
                        yen: 'transparent',
                        bc1: '#ffe900',
                        bc2: '#ffffff',
                        bc3: '#ffffff',
                        fc1: '#000000',
                        fc2: '#ffffff',
                        fc3: '#ffffff',
                        current: 1,
                    })
                    break;
                case 2:

                    this.setState({
                        rate: 0.03,
                        converted: (this.state.money * 0.03).toFixed(2),
                        inr: "transparent",
                        us: '#ffe900',
                        yen: 'transparent',
                        bc1: '#ffffff',
                        bc2: '#ffe900',
                        bc3: '#ffffff',
                        fc1: '#ffffff',
                        fc2: '#000000',
                        fc3: '#ffffff',
                        current: 2,
                    })

                    break;
                case 3:

                    this.setState({
                        rate: 3.34,
                        converted: (this.state.money * 3.34).toFixed(2),
                        inr: "transparent",
                        us: 'transparent',
                        yen: '#ffe900',
                        bc1: '#ffffff',
                        bc2: '#ffffff',
                        bc3: '#ffe900',
                        fc1: '#ffffff',
                        fc2: '#ffffff',
                        fc3: '#000000',
                        current: 3,
                    })
                    break;
            }


    }
    onclick1(current) {
        let c;
        if (this.state.show)
            switch (current) {
                case 1: c = this.state.money * 2.07;
                    break;
                case 2: c = this.state.money * 0.03;
                    break;
                case 3: c = this.state.money * 3.34;
                    break;

            }
        else
            switch (current) {
                case 1: c = this.state.money * 0.48;
                    break;
                case 2: c = this.state.money * 33.12;
                    break;
                case 3: c = this.state.money * 0.3;
                    break;

            }
        this.setState({ show: !this.state.show, converted: c.toFixed(2) })
    }
    render() {
        if (this.state.show)
            return (
                <View >
                    <ImageBackground style={styles.imgback}
                        source={require('../images/11.png')}>
                        <Myheader title={'CURRENCY CONVERSION'}
                            onpress={() => { this.props.navigation.pop() }} />
                        <Text style={styles.tex} >Amount</Text>
                        <View style={styles.v1} height={45}>

                            <TextInput
                                style={styles.input}
                                placeholderTextColor={"#ffffff"}
                                underlineColorAndroid={"transparent"}
                                keyboardType={'numeric'}
                                placeholder='Enter Amount'
                                autoFocus={true}
                                defaultValue={this.state.money}
                                onChangeText={(m) => {

                                    this.setState({ money: m, converted: (this.state.rate * m).toFixed(2) })
                                }}
                            />
                        </View>

                        <Text style={styles.tex} >Select Currency</Text>

                        <View flexDirection={'row'} justifyContent={'flex-start'}
                            marginLeft={20}
                        >

                            <TouchableWithoutFeedback onPress={() => { this.changecolor(1) }}>
                                <View style={styles.v}
                                    backgroundColor={this.state.inr}
                                    borderColor={this.state.bc1}
                                >
                                    <Text style={[styles.tex1, { color: this.state.fc1 }]}
                                    >INR</Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => { this.changecolor(2) }}>
                                <View style={styles.v}
                                    backgroundColor={this.state.us}
                                    borderColor={this.state.bc2}>
                                    <Text style={[styles.tex1, { color: this.state.fc2 }]}
                                    >US$</Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => { this.changecolor(3) }}>
                                <View style={styles.v}
                                    backgroundColor={this.state.yen}
                                    borderColor={this.state.bc3}>
                                    <Text style={[styles.tex1, { color: this.state.fc3 }]}
                                    >YEN</Text>
                                </View>
                            </TouchableWithoutFeedback>

                        </View>



                        <Text style={styles.tex}>Thai Bhat</Text>




                        <View flexDirection={'row'}>
                            <View style={styles.v2} >
                                <Text style={styles.tex2}
                                >{this.state.converted}</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => { this.onclick1(this.state.current) }}>
                                <Image style={styles.img}

                                    source={require('../images/switch.png')} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>

            );

        else

            return (
                <View >
                    <ImageBackground style={styles.imgback}
                        source={require('../images/11.png')}>
                        <Myheader title={'CURRENCY CONVERSION'}
                            onpress={() => { this.props.navigation.pop() }} />
                        <Text style={styles.tex} >Thai Bhat</Text>
                        <View style={styles.v1} height={45}>

                            <TextInput
                                style={styles.input}
                                placeholderTextColor={"#ffffff"}
                                underlineColorAndroid={"transparent"}
                                keyboardType={'numeric'}
                                placeholder='Enter Amount'
                                autoFocus={true}
                                defaultValue={this.state.money}
                                onChangeText={(m) => { this.setState({ money: m, converted: (this.state.rate * m).toFixed(2) }) }}
                            />
                        </View>

                        <Text style={styles.tex} >Select Currency</Text>

                        <View flexDirection={'row'} justifyContent={'flex-start'}
                            marginLeft={20}
                        >

                            <TouchableWithoutFeedback onPress={() => { this.changecolor(1) }}>
                                <View style={styles.v}
                                    backgroundColor={this.state.inr}
                                    borderColor={this.state.bc1}
                                >
                                    <Text style={[styles.tex1, { color: this.state.fc1 }]}
                                    >INR</Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => { this.changecolor(2) }}>
                                <View style={styles.v}
                                    backgroundColor={this.state.us}
                                    borderColor={this.state.bc2}>
                                    <Text style={[styles.tex1, { color: this.state.fc2 }]}
                                    >US$</Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => { this.changecolor(3) }}>
                                <View style={styles.v}
                                    backgroundColor={this.state.yen}
                                    borderColor={this.state.bc3}>
                                    <Text style={[styles.tex1, { color: this.state.fc3 }]}
                                    >YEN</Text>
                                </View>
                            </TouchableWithoutFeedback>

                        </View>



                        <Text style={styles.tex}>Amount</Text>




                        <View flexDirection={'row'}>
                            <View style={styles.v2} >
                                <Text style={styles.tex2}
                                >{this.state.converted}</Text>
                            </View>
                            <TouchableOpacity onPress={() => { this.onclick1(this.state.current) }}>
                                <Image style={styles.img}

                                    source={require('../images/switch.png')} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>

            );

    }


}

const styles = StyleSheet.create({
    img: {
        height: 50,
        width: 50,

    },
    imgback: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    tex: {
        fontSize: 20,
        color: "#ffffff",
        height: 30,
        fontWeight: 'bold',
        marginLeft: 26,
        marginTop: 5,
        marginBottom: 5,

    },
    tex2: {
        fontSize: 20,
        color: "#ffffff",
        height: 30,
        fontWeight: 'bold',
        marginLeft: 2,
        marginTop: 5,
        marginBottom: 5,

    },
    tex1: {
        fontSize: 20,
        height: 30,
        fontWeight: 'bold',
        textAlign: "center",
    },

    v: {
        width: (Dimensions.get('window').width - 87) / 3,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 2,
        marginRight: 3,
        borderWidth: 2,
        borderColor: '#ffffff',
        height: 45,
        justifyContent: 'center'
    },
    v1: {
        width: Dimensions.get('window').width - 80,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 25,
        marginRight: 5,
        borderWidth: 2,
        borderColor: '#ffffff'

    },
    v2: {
        width: Dimensions.get('window').width - 130,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 25,
        marginRight: 5,
        borderWidth: 2,
        borderColor: '#ffffff'

    },
    input: {
        height: 45,
        color: '#ffffff',
        fontSize: 18,
        textAlignVertical: 'center'
    }
}
);
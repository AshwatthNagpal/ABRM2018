import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableWithoutFeedback,
    ImageBackground,
    Dimensions,
    Text,
    View,
} from 'react-native'

export default class FromBangkok extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View>
                <ImageBackground style={styles.imgback}
                    source={require('../images/loginpic.png')}>
                    <Myheader title={''}
                        onpress={() => { this.props.navigation.pop() }} />
                    <View alignItems={'center'}>
                        <TouchableWithoutFeedback
                            onPress={() => { this.props.navigation.navigate('frombangkok') }}>
                            <View style={styles.v}>
                                <Text style={styles.tex}>
                                    TO BANGLORE
                                 </Text>
                            </View>
                        </TouchableWithoutFeedback>


                        <TouchableWithoutFeedback
                            onPress={() => { this.props.navigation.navigate('frombangkok') }}>
                            <View style={styles.v}>
                                <Text style={styles.tex}>
                                    TO CHENNAI
                                  </Text>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback
                            onPress={() => { this.props.navigation.navigate('frombangkok') }}>
                            <View style={styles.v}>
                                <Text style={styles.tex}>
                                    TO DELHI
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback
                            onPress={() => { this.props.navigation.navigate('frombangkok') }}>
                            <View style={styles.v}>
                                <Text style={styles.tex}>
                                    TO KOLKATA
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback
                            onPress={() => { this.props.navigation.navigate('frombangkok') }}>
                            <View style={styles.v}>
                                <Text style={styles.tex}>
                                    TO MUMBAI
                                    </Text>
                            </View>
                        </TouchableWithoutFeedback>

                    </View>
                </ImageBackground>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    imgback: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    },
    tex: {
        fontSize: 20,
        color: "#ffffff",
        textAlign: 'center',

        height: 40,
        width: 200,
        alignSelf: 'center',
        textAlignVertical: 'center'
    },
    v: {
        borderColor: '#ffffff',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        width: Dimensions.get('window').width - 20,
        height: 40
    }
}
);
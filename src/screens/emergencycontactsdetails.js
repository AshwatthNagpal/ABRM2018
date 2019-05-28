import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableWithoutFeedback,
    ImageBackground,
    Dimensions,
    Text,
    View,
    Linking,
    
} from 'react-native';

export default class EmergencyContactDetails extends Component {
    static navigationOptions={
        header:null
    }
    _onpress = (mob) => {
                Linking.openURL("tel:" + mob);
               }
    render() {
        return (
            <View>
                <ImageBackground style={styles.imgback}
                    source={require('../images/11.png')}>
                    <Myheader title={'EMERGENCY CONTACT DETAILS'}
                onpress={()=>{this.props.navigation.pop()}} />
                    <View flexDirection={'row'}>
                        <View marginLeft={10}>
                            <Text style={styles.white}>Ambulance and Rescue</Text>
                            <Text style={styles.white}>Crime</Text>
                            <Text style={styles.white}>Highway Police</Text>
                            <Text style={styles.white}>Medical Emergency Call</Text>
                            <Text style={styles.white}>Police</Text>
                            <Text style={styles.white}>Indian Embassy</Text>
                            <Text style={styles.white}>Rahul Singh(Event Partner)</Text>
                            <Text style={styles.white}>Alpesh(Travel Partner)</Text>
                        </View>

                        <View>
                            <TouchableWithoutFeedback
                                onPress={()=>this._onpress(1554)}>
                                <View>
                                    <Text style={styles.yellow}>1554</Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback
                                onPress={()=>this._onpress(1195)}>
                                <View>
                                    <Text style={styles.yellow}>1195</Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback
                                onPress={()=>this._onpress(1193)}>
                                <View>
                                    <Text style={styles.yellow}>1193</Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback
                                onPress={()=>this._onpress(1669)}>
                                <View>
                                    <Text style={styles.yellow}>1669</Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback
                                onPress={()=>this._onpress(191)}>
                                <View>
                                    <Text style={styles.yellow}>191</Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback
                                onPress={()=>this._onpress(+6622580300)}>
                                <View>
                                    <Text style={styles.yellow}>+6622580300</Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback
                                onPress={()=>this._onpress(+919971003476)}>
                                <View>
                                    <Text style={styles.yellow}>+919971003476</Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback
                                onPress={()=>this._onpress(+919818999720)}>
                                <View>
                                    <Text style={styles.yellow}>+919818999720</Text>
                                </View>
                            </TouchableWithoutFeedback>

                        </View>
                    </View>

                    <Text style={styles.tex}>You may contact head office sales planning team as well</Text>
                </ImageBackground>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    imgback: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    tex: {
        fontSize: 17,
        color: "#ffffff",
        textAlign: 'center',
        fontWeight: 'bold',
        marginRight: 8,
        marginLeft: 8,
        marginTop:10
    },
    white: {
        fontSize: 15,
        color: '#ffffff',
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'right'
    },
    yellow: {
        fontSize: 15,
        color: '#ffe900',
        marginTop: 10,
        marginBottom: 10,

    },
    V: {
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 5,

    }
}
);
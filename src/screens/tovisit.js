import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Myheader from '../component/MyHeader'
export default class ToVisit extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../images/19.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'PLACES TO VISIT'}
                        onpress={() => { this.props.navigation.pop() }}
                    />

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('grandpalace') }}>
                        <View style={styles.back}>
                            <Text style={styles.text}>GRAND PALACE</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('watpho') }}>
                        <View style={styles.back}>
                            <Text style={styles.text}>WAT PHO</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('watarun') }}>
                        <View style={styles.back}>
                            <Text style={styles.text}>WAT ARUN</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('xyz') }}>
                        <View style={styles.back}>
                            <Text style={styles.text}>WAT SUTHAT</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('nationalmuseum') }}>
                        <View style={styles.back}>
                            <Text style={styles.text}>NATIONAL MUSEUM</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('chatuchakmarket') }}>
                        <View style={styles.back}>
                            <Text style={styles.text}>CHATUCHAK MARKET</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('lumpinipark') }}>
                        <View style={styles.back}>
                            <Text style={styles.text}>LUMPINI PARK</Text>
                        </View>
                    </TouchableOpacity>
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
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18,
        color: '#ffffff',

    },
    back: {
        width: Dimensions.get('window').width - 20,
        height: 40,
        borderWidth: 2,
        justifyContent: 'center',
        borderColor: "#ffffff",
        marginTop: 7,
        marginBottom: 7,
        marginLeft: 7,
        marginRight: 7,
        alignSelf: 'center'
    }

})
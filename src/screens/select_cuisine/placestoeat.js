import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class PlacesToEat extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/19.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'PLACES TO EAT'}
                        onpress={() => { this.props.navigation.pop() }}
                    />

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('gaggan') }}>
                        <View style={styles.back}>
                            <Text style={styles.text}>GAGGAN</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('bawarchi') }}>
                        <View style={styles.back}>
                            <Text style={styles.text}>BAWARCHI</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('thegreatkebab') }}>
                        <View style={styles.back}>
                            <Text style={styles.text}>THE GREAT KEBAB FACTORY</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('sriganesha') }}>
                        <View style={styles.back}>
                            <Text style={styles.text}>SRI GANESHA</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('charcoal') }}>
                        <View style={styles.back}>
                            <Text style={styles.text}>CHARCOAL</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('indus') }}>
                        <View style={styles.back}>
                            <Text style={styles.text}>INDUS</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('rangmahal') }}>
                        <View style={styles.back}>
                            <Text style={styles.text}>RANG MAHAL</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('maya') }}>
                        <View style={styles.back}>
                            <Text style={styles.text}>MAYA</Text>
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
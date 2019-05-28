import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class UnionMall extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/unionmall1.jpg')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'UNION MALL'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>Sometimes the crowds in other budget shopping spots are just unbearable so that young locals go to Union Mall alternatively.  </Text>
                        <Text style={styles.white}>This mall has spacious walkways filled with shops from end-to-end.  </Text>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Opening Hours :</Text>
                            <Text style={styles.white}>11:00 to 22:00</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Location :</Text>
                            <Text style={styles.white1}>54 Sangkha Watthana 1 Alley,Khwa wng Chom Phon, Khet Chatuchak, Krung Thep Maha Nakhon</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand :</Text>
                            <Text style={styles.white}>9.2 kms</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    imgback: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    white1: {
        fontSize: 15,
        color: '#ffffff',
        marginTop: 10,
        marginBottom: 10,
        width: 300
    },
    white: {
        fontSize: 15,
        color: '#ffffff',
        marginTop: 10,
        marginBottom: 10,


    },
    yellow: {
        fontSize: 15,
        color: '#ffee00',
        marginTop: 10,
        marginBottom: 10,


    },
    back: {
        marginLeft: 15,
        marginRight: 15
    }

})
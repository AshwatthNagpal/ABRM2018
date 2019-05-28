import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class Indus extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/31.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'INDUS'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>The team at indus create authentic Mughalai style Indian cuisine, and they pride themselves in
                        producing food with excellent consistency, powerful yet delicate flavours, and dedication to quality.
                        High quality organic ingredients are sourced locally and grown in sustainable conditions. The
                        restaurant, set in a 1960s art deco house, comprises an sumptuous stone walled dining room,a stylish bar, outdoor dinning
                        in a lush tropical garden and an elegant private dining space.
                        Dishes are served in delightful authentic Indian copper and brassware dishes or on classical Thai celadon dining plates.
                          </Text>

                        <View flexDirection={'row'} >
                            <Text style={styles.yellow}>Address : </Text>
                            <Text style={styles.white1}>71 Sukhumvit Soi 11
</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand : </Text>
                            <Text style={styles.white}>6.3 kms</Text>
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
    white: {
        fontSize: 15,
        color: '#ffffff',
        marginTop: 10,
        marginBottom: 10,

    },
    white1: {
        fontSize: 15,
        color: '#ffffff',
        marginTop: 10,
        marginBottom: 10,
        width: 300
    },
    yellow: {
        fontSize: 15,
        color: '#ffee00',
        marginTop: 10,
        marginBottom: 10,


    },
    back: {
        marginLeft: 15,
        marginRight: 15,

    }

})
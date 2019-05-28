import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class GrandPalace extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/20.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'GRAND PALACE'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}>If you only  visit one major historical tourist attraction
                        in Bangkok, this should be the one.The royal compound lives up to its name , with spectacular
                  structures that would put the most decadent modern monarchs to shame </Text>

                        <Text style={styles.white}> Dress modestly when visiting the Grand Palace. This is a half-day
                        sightseeing tour, either morning or afternoon. without a guide, it's easy to miss relevance of what
                  you are seeing.</Text>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Hours :</Text>
                            <Text style={styles.white}>8:30am-3:30pm daily</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Distance from Centara Grand :</Text>
                            <Text style={styles.white}>5kms</Text>
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
        marginTop:10,
        marginBottom:10,


    },
    yellow: {
        fontSize: 15,
        color: '#ffee00',
        marginTop:10,
        marginBottom:10,
        

    },
    back: {
       marginLeft:15,
       marginRight:15
    }

})
import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    View,

} from 'react-native';
import Myheader from '../../component/MyHeader'
export default class NationalMuseum extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../../images/23.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'NATIONAL MUSEUM'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View style={styles.back}>
                        <Text style={styles.white}> History buffs in particular will want to
                        devote at least half a sight-seeing day to the national museum, if not more.
                         Until the mid-1970s, this was Thailand's only museum, which explains why its collection
                          is so big. Fortunately, just about every exhibit is labeled in Thai andEnglish and guided
                          tours are also offered in English, so you won'tmiss out on any of the country's
                           fascinating ancient and contemporary history. </Text>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Hours :</Text>
                            <Text style={styles.white}>9:00am-4:00pm daily</Text>
                        </View>

                        <View flexDirection={'row'}>
                            <Text style={styles.yellow}>Admission :</Text>
                            <Text style={styles.white}>200 baht</Text>
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
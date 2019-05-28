import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableWithoutFeedback,
    Image,
    View,

} from 'react-native';
import Myheader from '../component/MyHeader'

export default class ToEat extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../images/17.png')}
                    style={styles.imgback}
                    flex={1}
                >
                    <Myheader
                        title={'TO EAT'}
                        onpress={() => { this.props.navigation.pop() }}
                    />

                    <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('placestoeat') }}>
                        <Image style={styles.img} source={require('../images/icons/ic_to_eat.png')} />
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('thaicuisine') }}>
                        <Image style={styles.img} source={require('../images/icons/ic_to_shop.png')} />
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('multicuisine') }}>
                        <Image style={styles.img} source={require('../images/icons/ic_to_visit.png')} />
                    </TouchableWithoutFeedback>

                </ImageBackground>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    imgback: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center'
    },
    img: {
        width: 80,
        height: 80,
        marginTop: 20,
        marginBottom: 15

    }

});
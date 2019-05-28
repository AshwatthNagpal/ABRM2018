import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    Image,
    View,
    Alert,
    Linking,
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native';
import Myheader from '../component/MyHeader'
export default class PlacesToVisit extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View flex={1}>
                <ImageBackground
                    source={require('../images/20.png')}
                    style={styles.imgback}
                    flex={1}>
                    <Myheader
                        title={'PLACES TO VISIT'}
                        onpress={() => { this.props.navigation.pop() }}
                    />
                    <View flexDirection={'row'} justifyContent={'center'}>

                        <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('tovisit')}}>
                            <Image style={styles.img} source={require('../images/icons/ic_to_visit.png')} />
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('toshop')}}>
                            <Image style={styles.img} source={require('../images/icons/ic_to_shop.png')} />
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('toeat')}}>
                            <Image style={styles.img} source={require('../images/icons/ic_to_eat.png')} />
                        </TouchableWithoutFeedback>

                    </View>
                </ImageBackground>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    imgback: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    img: {
        width: 80,
        height: 80,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,

    }


})
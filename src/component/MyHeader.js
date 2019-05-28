import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

export default Myheader = (props) => {
   
    return (<View style={styles.v}>
        <TouchableOpacity onPress={props.onpress}>
            <Image style={styles.img} source={require('../images/back.png')} />
        </TouchableOpacity>
        <View style={styles.view}>
            <Text style={styles.text} >{props.title}</Text>
        </View>
    </View>

    );
}
const styles = StyleSheet.create({

    v: {
        flexDirection: 'row',
        marginTop: 10,
        width: Dimensions.get('window').width,
        height: 60,
        marginBottom: 10,
        alignItems: 'center',
        alignSelf: 'center'
    },
    text: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: "#ffe900",
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 200,
        height: 55,
    },
    view: {
        width: Dimensions.get('window').width - 70,
        justifyContent: 'center',
    },
    img: {
        marginLeft: 20,
        width: 25,
        marginTop: 7,
        height: 18,
        alignSelf: 'center'

    }
});
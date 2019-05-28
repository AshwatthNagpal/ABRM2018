import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

export default class AnalogClock extends Component {

    constructor(props) {
        super(props);

        let d = new Date();

        let h, m, s1;
        h = d.getUTCHours() + this.props.hour;
        m = d.getUTCMinutes() + this.props.minutes;
        s1 = d.getUTCSeconds() + this.props.sec;

        if (s1 >= 60) {
            s1 = s - 60;
            m = m + 1;
        }
        if (m >= 60) {
            m = m - 60;
            h = h + 1;
        }
        if (h >= 24)
            h = h - 24;
        this.state = {
            sec: (d.getUTCSeconds() + this.props.sec) * 6,
            min: (d.getUTCMinutes() + this.props.minutes) * 6 + ((d.getUTCSeconds() + this.props.sec) * 6) / 60,

            hour: (((d.getUTCHours() + this.props.hour) % 12) / 12) * 360 + 90 +
                ((d.getUTCMinutes() + this.props.minutes) * 6 + ((d.getUTCSeconds() + this.props.sec) * 6) / 60) / 12,

            hr: h,
            minut: m,
            s: s1

        };



    }

    componentDidMount() {
        this.timer = setInterval(() => {
            let d = new Date();
            this.setState({
                sec: (d.getUTCSeconds() + this.props.sec) * 6,
                min: (d.getUTCMinutes() + this.props.minutes) * 6 +
                    ((d.getUTCSeconds() + this.props.sec) * 6) / 60,
                hour: (((d.getUTCHours() + this.props.hour) % 12) / 12) * 360 + 90 +
                    ((d.getUTCMinutes() + this.props.minutes) * 6 + ((d.getUTCSeconds() + this.props.sec) * 6) / 60) / 12
            });
            if (this.state.s >= 60) {
                let m = this.state.minut + 1;
                let h = this.state.hr;
                if (m >= 60) {
                    m = m - 60
                    h = ((h + 1) >= 24) ? this.state.hr - 24 : this.state.hr + 1;
                }

                this.setState({
                    s: this.state.s - 59,
                    minut: m,
                    hr: h
                });
            }
            else
                this.setState({
                    s: this.state.s + 1

                });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    clockFrame() {
        return {
            width: this.props.clockSize,
            height: this.props.clockSize,
            position: 'relative',
            borderColor: 'black',
            borderWidth: this.props.clockBorderWidth,
            borderRadius: this.props.clockSize / 2
        }
    }

    clockHolder() {
        return {
            width: this.props.clockSize,
            height: this.props.clockSize,
            position: 'absolute',
            right: -this.props.clockBorderWidth,
            bottom: -this.props.clockBorderWidth
        }
    }

    clockFace() {
        return {
            width: this.props.clockCentreSize,
            height: this.props.clockCentreSize,
            backgroundColor: this.props.clockCentreColor,
            borderRadius: this.props.clockCentreSize / 2,
            top: (this.props.clockSize - this.props.clockCentreSize) / 2,
            left: (this.props.clockSize - this.props.clockCentreSize) / 2
        }
    }

    hourHandStyles() {
        return {
            width: 0,
            height: 0,
            position: 'absolute',
            backgroundColor: this.props.hourHandColor,
            top: this.props.clockSize / 2,
            left: this.props.clockSize / 2,
            marginVertical: -this.props.hourHandWidth,
            marginLeft: -this.props.hourHandLength / 2,
            paddingVertical: this.props.hourHandWidth,
            paddingLeft: this.props.hourHandLength,
            borderTopLeftRadius: this.props.hourHandCurved ?
                this.props.hourHandWidth : 0,
            borderBottomLeftRadius: this.props.hourHandCurved ?
                this.props.hourHandWidth : 0
        }
    }

    minuteHandStyles() {
        return {
            width: 0,
            height: 0,
            position: 'absolute',
            backgroundColor: this.props.minuteHandColor,
            top: this.props.clockSize / 2,
            left: this.props.clockSize / 2,
            marginTop: -(this.props.minuteHandLength / 2),
            marginHorizontal: -this.props.minuteHandWidth,
            paddingTop: this.props.minuteHandLength,
            paddingHorizontal: this.props.minuteHandWidth,
            borderTopLeftRadius: this.props.minuteHandCurved ?
                this.props.minuteHandWidth : 0,
            borderTopRightRadius: this.props.minuteHandCurved ?
                this.props.minuteHandWidth : 0
        }
    }

    secondHandStyles() {
        return {
            width: 0,
            height: 0,
            position: 'absolute',
            backgroundColor: 'black',
            top: this.props.clockSize / 2,
            left: this.props.clockSize / 2,
            marginTop: -(this.props.secondHandLength / 2),
            marginHorizontal: -this.props.secondHandWidth,
            paddingTop: this.props.secondHandLength,
            paddingHorizontal: this.props.secondHandWidth,
            borderTopLeftRadius: this.props.secondHandCurved ?
                this.props.secondHandWidth : 0,
            borderTopRightRadius: this.props.secondHandCurved ?
                this.props.secondHandWidth : 0
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.text}>{this.props.place}</Text>
                <View style={this.clockFrame()}>
                    {/* Uncomment for background image
        <Image
          style={{width: this.props.clockSize - this.props.clockBorderWidth*2,
            height: this.props.clockSize - this.props.clockBorderWidth*2}}
          resizeMode='stretch'
          source={require('./img/clockBack.png')}
        />
        */}

                    <View style={this.clockHolder()}>

                        <View style={[this.hourHandStyles(),
                        {
                            transform: [{ rotate: this.state.hour + 'deg' },
                            {
                                translateX: -(this.props.hourHandOffset +
                                    this.props.hourHandLength / 2)
                            }]
                        }]}
                        />

                        <View style={[this.minuteHandStyles(),
                        {
                            transform: [{ rotate: this.state.min + 'deg' },
                            {
                                translateY: -(this.props.minuteHandOffset +
                                    this.props.minuteHandLength / 2)
                            }]
                        }]}
                        />

                        <View style={[this.secondHandStyles(),
                        {
                            transform: [{ rotate: this.state.sec + 'deg' },
                            {
                                translateY: -(this.props.secondHandOffset +
                                    this.props.secondHandLength / 2)
                            }]
                        }]}
                        />

                        <View style={this.clockFace()} />

                    </View>
                </View>
                <Text style={styles.text}>{this.state.hr}:{this.state.minut}</Text>
            </View>
        )
    };
};

AnalogClock.defaultProps = {
    backgroundImage: './img/clockBack.png',
    clockSize: 270,
    clockBorderWidth: 7,
    clockCentreSize: 15,
    clockCentreColor: 'black',
    hourHandColor: 'black',
    hourHandCurved: true,
    hourHandLength: 70,
    hourHandWidth: 5.5,
    hourHandOffset: 0,
    minuteHandColor: 'black',
    minuteHandCurved: true,
    minuteHandLength: 100,
    minuteHandWidth: 5,
    minuteHandOffset: 0,
    secondHandColor: 'black',
    secondHandCurved: false,
    secondHandLength: 120,
    secondHandWidth: 2,
    secondHandOffset: 0,
};
const styles = StyleSheet.create({

    text: {
        fontSize: 12,
        width: 70,
        fontWeight: 'bold',
        height: 35,
        marginBottom: 2,
        marginTop: 2,
        textAlign: 'center',
        alignSelf: 'center'
    }

})
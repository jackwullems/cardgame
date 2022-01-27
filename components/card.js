/**
 * Created by ggoma on 2016. 11. 27..
 */
import React, {Component} from 'react';
import {
    View,
    Animated,
    Dimensions,
    Image,
    PanResponder,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import {location, ground} from '../store'
import {cardSize, imageMap} from './helpers'
import { addT1, addT2, addT3, addL1, addL2, addL3, addR1, addR2, addR3, addW1, addW2, addW3, addB1, addB2, addB3, addG11, addG12, addG13, addG21, addG22, addG23, addG31, addG32, addG33 } from '../redux/actions'
import {connect} from 'react-redux'
import SoundPlayer from 'react-native-sound-player'

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(),
            portrait: this.props.portrait,
            dragging: false,
            mode: 'fix',
        }
    }
    to = null
    componentWillMount() {
        this._animatedValueX = 0;
        this._animatedValueY = 0;
        this.state.pan.x.addListener((value) => {
            this._animatedValueX = value.value
        });
        this.state.pan.y.addListener((value) => this._animatedValueY = value.value);

        this._panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => this.props.draggable,
            onPanResponderGrant: (e, gestureState) => {
                this.setState({dragging: true})
                this.props.setDragging()
                // this.state.pan.setOffset({x: this._animatedValueX, y: this._animatedValueY});
                // this.state.pan.setValue({x: 0, y: 0});
            },
            onPanResponderMove: this.onPanResponderMove,
            onPanResponderRelease: this.onPanResponderRelease,
        });
    }

    onPanResponderMove = (event, gesture) => {
        Animated.event([
            null, {dx: this.state.pan.x, dy: this.state.pan.y},
        ])(event, gesture)
        const e = event.nativeEvent
        const to = this.getDestinaton(e)
        var mode = 'fix'
        if (to) {
            mode = this.props.moveOn(to)
        }
        if (to != this.to) {
            if (this.to && this.props.modeChanged != undefined) {
                this.props.modeChanged(this.to.id, 'fix')
            }
            this.to = to
            if (this.to && this.props.modeChanged != undefined) {
                this.props.modeChanged(to.id, mode)
            }
        }
        if (mode != this.state.mode) {
            this.setState({mode})
        }
    }

    onPanResponderRelease = (event, gesture) => {
        if (this.to == null) {
            Animated.spring(this.state.pan, {
                toValue: 0
            }).start()
            return
        }
        if (this.state.mode == 'move') {
            this.props.releaseOn(this.to, ()=>{
                SoundPlayer.playSoundFile('correct', 'mp3')
                Animated.timing(this.state.pan, {
                    toValue: 0,
                    duration: 0,
                }).start();
                this.props.modeChanged(this.to.id, 'fix')
                this.setState({mode: 'fix'})
            }, ()=>{
                SoundPlayer.playSoundFile('error', 'mp3')
                Animated.spring(this.state.pan, {
                    toValue: 0
                }).start()
                return
            })
            this.props.modeChanged(this.to.id, 'fix')
            this.setState({mode: 'fix'})
            return
        }
        Animated.spring(this.state.pan, {
            toValue: 0
        }).start()
        this.props.modeChanged(this.to.id, 'fix')
        this.setState({mode: 'fix'})
        // if (!this.props.releaseOn(to)) {
        //     Animated.spring(this.state.pan, {
        //         toValue: 0
        //     }).start()
        // }
        // Animated.timing(this.state.pan, {
        //     toValue: 0,
        //     duration: 0,
        //   }).start();
    }

    componentWillUnmount() {
        this.state.pan.x.removeAllListeners();
        this.state.pan.y.removeAllListeners();
    }

    getStyle() {
        return [
            styles.card,
            {
                transform: [
                    {
                        translateX: this.state.pan.x
                    },
                    {
                        translateY: this.state.pan.y
                    },
                    {
                        rotate: this.state.portrait?'0deg':'90deg'
                    }
                ]
            }
        ];
    }

    getDestinaton(e) {
        if (e.pageX > location.t1.x && e.pageX < location.t1.x+location.t1.width && e.pageY > location.t1.y && e.pageY < location.t1.y+location.t1.height) {
            return ground.t1
        }
        if (e.pageX > location.t2.x && e.pageX < location.t2.x+location.t2.width && e.pageY > location.t2.y && e.pageY < location.t2.y+location.t2.height) {
            return ground.t2
        }
        if (e.pageX > location.t3.x && e.pageX < location.t3.x+location.t3.width && e.pageY > location.t3.y && e.pageY < location.t3.y+location.t3.height) {
            return ground.t3
        }
        if (e.pageX > location.l1.x && e.pageX < location.l1.x+location.l1.width && e.pageY > location.l1.y && e.pageY < location.l1.y+location.l1.height) {
            return ground.l1
        }
        if (e.pageX > location.l2.x && e.pageX < location.l2.x+location.l2.width && e.pageY > location.l2.y && e.pageY < location.l2.y+location.l2.height) {
            return ground.l2
        }
        if (e.pageX > location.l3.x && e.pageX < location.l3.x+location.l3.width && e.pageY > location.l3.y && e.pageY < location.l3.y+location.l3.height) {
            return ground.l3
        }
        if (e.pageX > location.g11.x && e.pageX < location.g11.x+location.g11.width && e.pageY > location.g11.y && e.pageY < location.g11.y+location.g11.height) {
            return ground.g11
        }
        if (e.pageX > location.g12.x && e.pageX < location.g12.x+location.g12.width && e.pageY > location.g12.y && e.pageY < location.g12.y+location.g12.height) {
            return ground.g12
        }
        if (e.pageX > location.g13.x && e.pageX < location.g13.x+location.g13.width && e.pageY > location.g13.y && e.pageY < location.g13.y+location.g13.height) {
            return ground.g13
        }
        if (e.pageX > location.g21.x && e.pageX < location.g21.x+location.g21.width && e.pageY > location.g21.y && e.pageY < location.g21.y+location.g21.height) {
            return ground.g21
        }
        if (e.pageX > location.g22.x && e.pageX < location.g22.x+location.g11.width && e.pageY > location.g22.y && e.pageY < location.g22.y+location.g22.height) {
            return ground.g22
        }
        if (e.pageX > location.g23.x && e.pageX < location.g23.x+location.g23.width && e.pageY > location.g23.y && e.pageY < location.g23.y+location.g23.height) {
            return ground.g23
        }
        if (e.pageX > location.g31.x && e.pageX < location.g31.x+location.g31.width && e.pageY > location.g31.y && e.pageY < location.g31.y+location.g31.height) {
            return ground.g31
        }
        if (e.pageX > location.g32.x && e.pageX < location.g32.x+location.g32.width && e.pageY > location.g32.y && e.pageY < location.g32.y+location.g32.height) {
            return ground.g32
        }
        if (e.pageX > location.g33.x && e.pageX < location.g33.x+location.g33.width && e.pageY > location.g33.y && e.pageY < location.g33.y+location.g33.height) {
            return ground.g33
        }
        if (e.pageX > location.r1.x && e.pageX < location.r1.x+location.r1.width && e.pageY > location.r1.y && e.pageY < location.r1.y+location.r1.height) {
            return ground.r1
        }
        if (e.pageX > location.r2.x && e.pageX < location.r2.x+location.r2.width && e.pageY > location.r2.y && e.pageY < location.r2.y+location.r2.height) {
            return ground.r2
        }
        if (e.pageX > location.r3.x && e.pageX < location.r3.x+location.r3.width && e.pageY > location.r3.y && e.pageY < location.r3.y+location.r3.height) {
            return ground.r3
        }
        if (e.pageX > location.w1.x && e.pageX < location.w1.x+location.w1.width && e.pageY > location.w1.y && e.pageY < location.w1.y+location.w1.height) {
            return ground.w1
        }
        if (e.pageX > location.w2.x && e.pageX < location.w2.x+location.w2.width && e.pageY > location.w2.y && e.pageY < location.w2.y+location.w2.height) {
            return ground.w2
        }
        if (e.pageX > location.w3.x && e.pageX < location.w3.x+location.w3.width && e.pageY > location.w3.y && e.pageY < location.w3.y+location.w3.height) {
            return ground.w3
        }
        if (e.pageX > location.b1.x && e.pageX < location.b1.x+location.b1.width && e.pageY > location.b1.y && e.pageY < location.b1.y+location.b1.height) {
            return ground.b1
        }
        if (e.pageX > location.b2.x && e.pageX < location.b2.x+location.b2.width && e.pageY > location.b2.y && e.pageY < location.b2.y+location.b2.height) {
            return ground.b2
        }
        if (e.pageX > location.b3.x && e.pageX < location.b3.x+location.b3.width && e.pageY > location.b3.y && e.pageY < location.b3.y+location.b3.height) {
            return ground.b3
        }
        if (e.pageX > location.royal.x && e.pageX < location.royal.x+location.royal.width && e.pageY > location.royal.y && e.pageY < location.royal.y+location.royal.height) {
            return ground.royal
        }
        if (e.pageX > location.pot.x && e.pageX < location.pot.x+location.pot.width && e.pageY > location.pot.y && e.pageY < location.pot.y+location.pot.height) {
            return ground.pot
        }
        if (e.pageX > location.pend.x && e.pageX < location.pend.x+location.pend.width && e.pageY > location.pend.y && e.pageY < location.pend.y+location.pend.height) {
            return ground.pend
        }
        return null
    }
    
    render() {
        const {dragging, mode} = this.state
        const {source, relateMode} = this.props
        const zIndex = dragging ? 0 : 0;
        const borderColor = (mode=='fix'&&relateMode=='fix')?'black':(mode=='not'||relateMode=='not')?'red':(mode=='move'||relateMode=='move')?'green':(mode=='replace'||relateMode=='replace')?'green':'green'
        const borderWidth = borderColor=='black'?0.5:3
        if (source == null || source.id == null) {
            return (
                <View style={[styles.back, {zIndex, borderColor, borderWidth, transform: [{rotate: this.state.portrait?'0deg':'90deg'}]}]} >
                </View>
            )
        }

        if (this.props.source.faceDown) {
            return (
                <Animated.View
                    style={[this.getStyle(), {zIndex, borderColor, borderWidth}]}
                    {...this._panResponder.panHandlers}
                >
                    <TouchableWithoutFeedback
                        onPress={()=>{
                            this.props.onPress()
                        }}>
                        <Image source={require('../img/back.jpg')} style={styles.img} resizeMode='stretch'/>
                    </TouchableWithoutFeedback>
                </Animated.View>
            )
        }
        return (
            <Animated.View
                style={[this.getStyle(), {zIndex, borderColor, borderWidth}]}
                {...this._panResponder.panHandlers}
                >
                <TouchableWithoutFeedback
                    onPress={()=>{
                        this.props.onPress()
                    }}>
                    <Image source={imageMap[source.id]} style={[styles.img, {zIndex}]} resizeMode='stretch'/>
                </TouchableWithoutFeedback>
                {
                    mode=='replace' &&
                    <View style={{position: 'absolute', right: '10%', bottom: '10%', width: '20%', height: '20%', zIndex: 20}}><Image source={require('../img/finger48.png')} resizeMode='cover'></Image></View>
                }
            </Animated.View>
        )
    }

    move(x, y) {
        // SoundPlayer.playSoundFile('flip', 'mp3')
        Animated.spring(this.state.pan, {toValue: {x, y}}).start()
    }
}

var styles = StyleSheet.create({
    back: {
        width: cardSize().width,
        height: cardSize().height,
        borderWidth: 0.5,
        borderRadius: 3,
        backgroundColor: 'white'
    },
    card: {
        width: cardSize().width,
        height: cardSize().height,
        borderRadius: 3,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 1,
        borderWidth: 0.5,
        borderColor: 'black',
    },
    img: {
        flex: 1,
        height: '100%',
        width: '100%',
        borderColor: 'white',
        padding: 1
        // backgroundColor: 'white',
    }
});

const mapStateToProps = (state) => ({
    t1: state.t1, t2: state.t2, t3: state.t3,
    l1: state.l1, l2: state.l2, l3: state.l3,
    r1: state.r1, r2: state.r2, r3: state.r3,
    b1: state.b1, b2: state.b2, b3: state.b3,
});

export default connect(
    mapStateToProps,
    {addT1, addT2, addT3, addL1, addL2, addL3, addR1, addR2, addR3, addW1, addW2, addW3, addB1, addB2, addB3, addG11, addG12, addG13, addG21, addG22, addG23, addG31, addG32, addG33},
    null,
    { forwardRef: true },
    )(Card);

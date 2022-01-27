/**
 * Created by ggoma on 2016. 11. 27..
 */
import React, {Component} from 'react';
import {
    SafeAreaView,
    View,
    Image,
    Button
} from 'react-native';
// import {
//     AdMobBanner,
//     AdMobInterstitial,
//     PublisherBanner,
//     AdMobRewarded,
//   } from '@react-native-admob/admob'
import Pot from './pot'
import G11 from './g11'
import G12 from './g12'
import G13 from './g13'
import G21 from './g21'
import G22 from './g22'
import G23 from './g23'
import G31 from './g31'
import G32 from './g32'
import G33 from './g33'
import T1 from './t1'
import T2 from './t2'
import T3 from './t3'
import L1 from './l1'
import L2 from './l2'
import L3 from './l3'
import R1 from './r1'
import R2 from './r2'
import R3 from './r3'
import W1 from './w1'
import W2 from './w2'
import W3 from './w3'
import B1 from './b1'
import B2 from './b2'
import B3 from './b3'
import Royal from './royal'
import Pend from './pend'
import {connect} from 'react-redux'
import SoundPlayer from 'react-native-sound-player'
import {logicRlease, logicDrop, ground, deal} from '../store'


import { addT1, addT2, addT3, addL1, addL2, addL3, addR1, addR2, addR3, addW1, addW2, addW3, addB1, addB2, addB3, addG11, addG12, addG13, addG21, addG22, addG23, addG31, addG32, addG33, addPot, addRoyal, addPend,
    popT1, popT2, popT3, popL1, popL2, popL3, popR1, popR2, popR3, popW1, popW2, popW3, popB1, popB2, popB3, popG11, popG12, popG13, popG21, popG22, popG23, popG31, popG32, popG33, popPot, popRoyal, popPend,
    replaceT1, replaceT2, replaceT3, replaceL1, replaceL2, replaceL3, replaceR1, replaceR2, replaceR3, replaceW1, replaceW2, replaceW3, replaceB1, replaceB2, replaceB3, replaceG11, replaceG12, replaceG13, replaceG21, replaceG22, replaceG23, replaceG31, replaceG32, replaceG33, replaceRoyal,
    setGameatrest, reset
} from '../redux/actions'

class Board extends Component {
    state = {
        dragging: 'pot',
        moveCard: {
            to: null,
            mode: null
        }
    }
    stack = []

    componentDidMount() {
        SoundPlayer.playSoundFile('shuffle', 'mp3')
    }

    render() {
        var tableArray = [
            {table: <T1 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='t1' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 't1', order: 0},
            {table: <T2 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='t2' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 't2', order: 0},
            {table: <T3 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='t3' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 't3', order: 0},
            {table: <L1 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='l1' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'l1', order: 0},
            {table: <L2 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='l2' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'l2', order: 0},
            {table: <L3 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='l3' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'l3', order: 0},
            {table: <G11 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='g11' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'g11', order: 0},
            {table: <G12 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='g12' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'g12', order: 0},
            {table: <G13 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='g13' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'g13', order: 0},
            {table: <G21 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='g21' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'g21', order: 0},
            {table: <G22 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='g22' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'g22', order: 0},
            {table: <G23 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='g23' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'g23', order: 0},
            {table: <G31 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='g31' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'g31', order: 0},
            {table: <G32 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='g32' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'g32', order: 0},
            {table: <G33 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='g33' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'g33', order: 0},
            {table: <R1 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='r1' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'r1', order: 0},
            {table: <R2 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='r2' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'r2', order: 0},
            {table: <R3 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='r3' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'r3', order: 0},
            {table: <W1 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='w1' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'w1', order: 0},
            {table: <W2 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='w2' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'w2', order: 0},
            {table: <W3 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='w3' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'w3', order: 0},
            {table: <B1 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='b1' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'b1', order: 0},
            {table: <B2 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='b2' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'b2', order: 0},
            {table: <B3 releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='b3' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'b3', order: 0},
            {table: <Royal releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='royal' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'royal', order: 0},
            {table: <Pot releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='pot' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'pot', order: 9},
            {table: <Pend releaseOn={this.releaseOn.bind(this)} modeChanged={this.modeChanged.bind(this)} key='pend' setDragging={this.setDragging.bind(this)} moveCard={this.state.moveCard}/>, id: 'pend', order: 0},
        ]
    
        if (this.state.dragging) {
            tableArray = tableArray.map(item=>{
                if (this.state.dragging == item.id) {
                    item.order = 10
                } else {
                    item.order = 0
                }
                return item
            })
            tableArray.sort((a, b)=>{
                if (a.order > b.order) {
                    return true
                }
                return false
            })
        }
        return (
            <SafeAreaView style={{flex: 1}}>
                <Image
                    style={{position: 'absolute', top: 0, width: '100%', left: 0, height: '100%'}}
                    source={require('../img/emptygameboard.jpg')}
                    resizeMode='cover'
                />
                {/* <AdMobBanner
                    adSize="fullBanner"
                    adUnitID="ca-app-pub-3940256099942544/6300978111"
                /> */}
                <View style={{flex: 1}}>
                {
                    tableArray.map((item, i)=>{
                        return item.table
                    })
                }
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Button title="undo" onPress={this.undo.bind(this)}/>
                    <Button title="reset" onPress={this.reset.bind(this)}/>
                </View>
            </SafeAreaView>
        )
    }

    undo() {
        const st = this.stack.pop()
        if (st != null) {
            switch (st.mode) {
                case 'move': {
                    this.move(ground[st.to], ground[st.from])
                    break
                }
                case 'replace': {
                    this.backReplace(ground[st.from], ground[st.to])
                    break
                }
                default: break
            }
        }
    }

    reset() {
        deal.init = false
        SoundPlayer.playSoundFile('shuffle', 'mp3')
        this.stack = []
        this.setState({dragging: 'pot', moveCard: {to: null, mode: null}})
        this.props.reset()
    }

    setDragging(dragging) {
        this.setState({dragging})
    }

    releaseOn(from, to, yes, no) {
        if (from.id != 'pend' && ground.pend.pending) {
            no()
            return
        }
        logicDrop(from, to, ()=>{//pass
            yes()
            this.stack.push({mode: 'move', from: from.id, to: to.id})
            this.move(from, to)
            return
        }, ()=>{//fail
            no()
        }, ()=>{//couple
            yes()
            this.stack.push({mode: 'move', from: from.id, to: to.id})
            this.move(from, to)
        }, ()=>{//replace
            yes()
            this.stack.push({mode: 'replace', from: from.id, to: to.id})
            this.replace(from, to)
        })
        // const logicResponse = logicRlease(from, to)
        // if (logicResponse == 'move') {
        //     this.stack.push({mode: 'move', from: from.id, to: to.id})
        //     this.move(from, to)
        //     return true
        // }
        // if (logicResponse == 'replace') {
        //     this.stack.push({mode: 'replace', from: from.id, to: to.id})
        //     this.replace(from, to)
        //     return true
        // }
        // return false
    }

    move(from, to) {
        this.props.setGameatrest(false)
        const toCard = from.cards[from.cards.length-1]
        const changePortrait = to.cards.length>1?!to.cards[to.cards.length-1].portrait:to.cards[0].portrait
        const keepPortrait = to.cards[0].portrait
        toCard.portrait = keepPortrait
        // toCard.faceDown = false
        switch (to.id) {
            case 'b1':
                this.props.addB1(toCard)
                break;
            case 'b2':
                this.props.addB2(toCard)
                break;
            case 'b3':
                this.props.addB3(toCard)
                break;
            case 'l1':
                this.props.addL1(toCard)
                break;
            case 'l2':
                this.props.addL2(toCard)
                break;
            case 'l3':
                this.props.addL3(toCard)
                break;
            case 'r1':
                this.props.addR1(toCard)
                break;
            case 'r2':
                this.props.addR2(toCard)
                break;
            case 'r3':
                this.props.addR3(toCard)
                break;
            case 'w1':
                this.props.addW1(toCard)
                break;
            case 'w2':
                this.props.addW2(toCard)
                break;
            case 'w3':
                this.props.addW3(toCard)
                break;
            case 't1':
                this.props.addT1(toCard)
                break;
            case 't2':
                this.props.addT2(toCard)
                break;
            case 't3':
                this.props.addT3(toCard)
                break;
            case 'g11':
                toCard.portrait = changePortrait
                this.props.addG11(toCard)
                break;
            case 'g12':
                toCard.portrait = changePortrait
                this.props.addG12(toCard)
                break;
            case 'g13':
                toCard.portrait = changePortrait
                this.props.addG13(toCard)
                break;
            case 'g21':
                toCard.portrait = changePortrait
                this.props.addG21(toCard)
                break;
            case 'g22':
                toCard.portrait = changePortrait
                this.props.addG22(toCard)
                break;
            case 'g23':
                toCard.portrait = changePortrait
                this.props.addG23(toCard)
                break;
            case 'g31':
                toCard.portrait = changePortrait
                this.props.addG31(toCard)
                break;
            case 'g32':
                toCard.portrait = changePortrait
                this.props.addG32(toCard)
                break;
            case 'g33':
                toCard.portrait = changePortrait
                this.props.addG33(toCard)
                break;
            case 'royal':
                this.props.addRoyal(toCard)
                break;
            case 'pot':
                toCard.faceDown = true
                this.props.addPot(toCard)
                break
            default:
                return;
        }
        switch (from.id) {
            case 'b1':
                this.props.popB1()
                break;
            case 'b2':
                this.props.popB2()
                break;
            case 'b3':
                this.props.popB3()
                break;
            case 'l1':
                this.props.popL1()
                break;
            case 'l2':
                this.props.popL2()
                break;
            case 'l3':
                this.props.popL3()
                break;
            case 'r1':
                this.props.popR1()
                break;
            case 'r2':
                this.props.popR2()
                break;
            case 'r3':
                this.props.popR3()
                break;
            case 'w1':
                this.props.popW1()
                break;
            case 'w2':
                this.props.popW2()
                break;
            case 'w3':
                this.props.popW3()
                break;
            case 't1':
                this.props.popT1()
                break;
            case 't2':
                this.props.popT2()
                break;
            case 't3':
                this.props.popT3()
                break;
            case 'g11':
                this.props.popG11()
                break;
            case 'g12':
                this.props.popG12()
                break;
            case 'g13':
                this.props.popG13()
                break;
            case 'g21':
                this.props.popG21()
                break;
            case 'g22':
                this.props.popG22()
                break;
            case 'g23':
                this.props.popG23()
                break;
            case 'g31':
                this.props.popG31()
                break;
            case 'g32':
                this.props.popG32()
                break;
            case 'g33':
                this.props.popG33()
                break;
            case 'royal':
                this.props.popRoyal()
                break
            case 'pot':
                this.props.popPot()
                break
            case 'pend':
                this.props.popPend()
                break
            default:
                return;
        }
    }

    replace(from, to) {
        this.props.setGameatrest(false)
        const fromCard = from.cards[from.cards.length-1]
        const toCard = to.cards[to.cards.length-1]
        switch (from.id) {
            case 'b1':
                this.props.popB1()
                this.props.addPend(toCard)
                break;
            case 'b2':
                this.props.popB2()
                this.props.addPend(toCard)
                break;
            case 'b3':
                this.props.popB3()
                this.props.addPend(toCard)
                break;
            case 'l1':
                this.props.popL1()
                this.props.addPend(toCard)
                break;
            case 'l2':
                this.props.popL2()
                this.props.addPend(toCard)
                break;
            case 'l3':
                this.props.popL3()
                this.props.addPend(toCard)
                break;
            case 'r1':
                this.props.popR1()
                this.props.addPend(toCard)
                break;
            case 'r2':
                this.props.popR2()
                this.props.addPend(toCard)
                break;
            case 'r3':
                this.props.popR3()
                this.props.addPend(toCard)
                break;
            case 'w1':
                this.props.popW1()
                this.props.addPend(toCard)
                break;
            case 'w2':
                this.props.popW2()
                this.props.addPend(toCard)
                break;
            case 'w3':
                this.props.popW3()
                this.props.addPend(toCard)
                break;
            case 't1':
                this.props.popT1()
                this.props.addPend(toCard)
                break;
            case 't2':
                this.props.popT2()
                this.props.addPend(toCard)
                break;
            case 't3':
                this.props.popT3()
                this.props.addPend(toCard)
                break;
            case 'g11':
                this.props.popG11()
                this.props.addPend(toCard)
                break;
            case 'g12':
                this.props.popG12()
                this.props.addPend(toCard)
                break;
            case 'g13':
                this.props.popG13()
                this.props.addPend(toCard)
                break;
            case 'g21':
                this.props.popG21()
                this.props.addPend(toCard)
                break;
            case 'g22':
                this.props.popG22()
                this.props.addPend(toCard)
                break;
            case 'g23':
                this.props.popG23()
                this.props.addPend(toCard)
                break;
            case 'g31':
                this.props.popG31()
                this.props.addPend(toCard)
                break;
            case 'g32':
                this.props.popG32()
                this.props.addPend(toCard)
                break;
            case 'g33':
                this.props.popG33()
                this.props.addPend(toCard)
                break;
            case 'pot':
                this.props.popPot()
                this.props.addPend(toCard)
                break
            default:
                return;
        }
        switch (to.id) {
            case 'b1':
                this.props.replaceB1(fromCard)
                break;
            case 'b2':
                this.props.replaceB2(fromCard)
                break;
            case 'b3':
                this.props.replaceB3(fromCard)
                break;
            case 'l1':
                this.props.replaceL1(fromCard)
                break;
            case 'l2':
                this.props.replaceL2(fromCard)
                break;
            case 'l3':
                this.props.replaceL3(fromCard)
                break;
            case 'r1':
                this.props.replaceR1(fromCard)
                break;
            case 'r2':
                this.props.replaceR2(fromCard)
                break;
            case 'r3':
                this.props.replaceR3(fromCard)
                break;
            case 'w1':
                this.props.replaceW1(fromCard)
                break;
            case 'w2':
                this.props.replaceW2(fromCard)
                break;
            case 'w3':
                this.props.replaceW3(fromCard)
                break;
            case 't1':
                this.props.replaceT1(fromCard)
                break;
            case 't2':
                this.props.replaceT2(fromCard)
                break;
            case 't3':
                this.props.replaceT3(fromCard)
                break;
            case 'g11':
                this.props.replaceG11(fromCard)
                break;
            case 'g12':
                this.props.replaceG12(fromCard)
                break;
            case 'g13':
                this.props.replaceG13(fromCard)
                break;
            case 'g21':
                this.props.replaceG21(fromCard)
                break;
            case 'g22':
                this.props.replaceG22(fromCard)
                break;
            case 'g23':
                this.props.replaceG23(fromCard)
                break;
            case 'g31':
                this.props.replaceG31(fromCard)
                break;
            case 'g32':
                this.props.replaceG32(fromCard)
                break;
            case 'g33':
                this.props.replaceG33(fromCard)
                break;
            // case 'pot':
            //     break
            default:
                return;
        }
    }

    backReplace(from, to) {
        const fromCard = ground.pend.cards[1]
        const toCard = to.cards[to.cards.length-1]
        switch (from.id) {
            case 'b1':
                this.props.popPend()
                this.props.addB1(toCard)
                break;
            case 'b2':
                this.props.popPend()
                this.props.addB2(toCard)
                break;
            case 'b3':
                this.props.popPend()
                this.props.addB3(toCard)
                break;
            case 'l1':
                this.props.popPend()
                this.props.addL1(toCard)
                break;
            case 'l2':
                this.props.popPend()
                this.props.addL2(toCard)
                break;
            case 'l3':
                this.props.popPend()
                this.props.addL3(toCard)
                break;
            case 'r1':
                this.props.popPend()
                this.props.addR1(toCard)
                break;
            case 'r2':
                this.props.popPend()
                this.props.addR2(toCard)
                break;
            case 'r3':
                this.props.popPend()
                this.props.addR3(toCard)
                break;
            case 'w1':
                this.props.popPend()
                this.props.addW1(toCard)
                break;
            case 'w2':
                this.props.popPend()
                this.props.addW2(toCard)
                break;
            case 'w3':
                this.props.popPend()
                this.props.addW3(toCard)
                break;
            case 't1':
                this.props.popPend()
                this.props.addT1(toCard)
                break;
            case 't2':
                this.props.popPend()
                this.props.addT2(toCard)
                break;
            case 't3':
                this.props.popPend()
                this.props.addT3(toCard)
                break;
            case 'g11':
                this.props.popPend()
                this.props.addG11(toCard)
                break;
            case 'g12':
                this.props.popPend()
                this.props.addG12(toCard)
                break;
            case 'g13':
                this.props.popPend()
                this.props.addG13(toCard)
                break;
            case 'g21':
                this.props.popPend()
                this.props.addG21(toCard)
                break;
            case 'g22':
                this.props.popPend()
                this.props.addG22(toCard)
                break;
            case 'g23':
                this.props.popPend()
                this.props.addG23(toCard)
                break;
            case 'g31':
                this.props.popPend()
                this.props.addG31(toCard)
                break;
            case 'g32':
                this.props.popPend()
                this.props.addG32(toCard)
                break;
            case 'g33':
                this.props.popPend()
                this.props.addG33(toCard)
                break;
            case 'pot':
                this.props.popPend()
                this.props.addPot(toCard)
                break
            default:
                return;
        }
        switch (to.id) {
            case 'b1':
                this.props.replaceB1(fromCard)
                break;
            case 'b2':
                this.props.replaceB2(fromCard)
                break;
            case 'b3':
                this.props.replaceB3(fromCard)
                break;
            case 'l1':
                this.props.replaceL1(fromCard)
                break;
            case 'l2':
                this.props.replaceL2(fromCard)
                break;
            case 'l3':
                this.props.replaceL3(fromCard)
                break;
            case 'r1':
                this.props.replaceR1(fromCard)
                break;
            case 'r2':
                this.props.replaceR2(fromCard)
                break;
            case 'r3':
                this.props.replaceR3(fromCard)
                break;
            case 'w1':
                this.props.replaceW1(fromCard)
                break;
            case 'w2':
                this.props.replaceW2(fromCard)
                break;
            case 'w3':
                this.props.replaceW3(fromCard)
                break;
            case 't1':
                this.props.replaceT1(fromCard)
                break;
            case 't2':
                this.props.replaceT2(fromCard)
                break;
            case 't3':
                this.props.replaceT3(fromCard)
                break;
            case 'g11':
                this.props.replaceG11(fromCard)
                break;
            case 'g12':
                this.props.replaceG12(fromCard)
                break;
            case 'g13':
                this.props.replaceG13(fromCard)
                break;
            case 'g21':
                this.props.replaceG21(fromCard)
                break;
            case 'g22':
                this.props.replaceG22(fromCard)
                break;
            case 'g23':
                this.props.replaceG23(fromCard)
                break;
            case 'g31':
                this.props.replaceG31(fromCard)
                break;
            case 'g32':
                this.props.replaceG32(fromCard)
                break;
            case 'g33':
                this.props.replaceG33(fromCard)
                break;
            // case 'pot':
            //     break
            default:
                return;
        }
    }

    modeChanged(to, mode) {
        this.setState({moveCard: {to, mode}})
    }

}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, { addT1, addT2, addT3, addL1, addL2, addL3, addR1, addR2, addR3, addW1, addW2, addW3, addB1, addB2, addB3, addG11, addG12, addG13, addG21, addG22, addG23, addG31, addG32, addG33, addRoyal, addPot, addPend,
    popT1, popT2, popT3, popL1, popL2, popL3, popR1, popR2, popR3, popW1, popW2, popW3, popB1, popB2, popB3, popG11, popG12, popG13, popG21, popG22, popG23, popG31, popG32, popG33, popRoyal, popPot, popPend,
    replaceT1, replaceT2, replaceT3, replaceL1, replaceL2, replaceL3, replaceR1, replaceR2, replaceR3, replaceW1, replaceW2, replaceW3, replaceB1, replaceB2, replaceB3, replaceG11, replaceG12, replaceG13, replaceG21, replaceG22, replaceG23, replaceG31, replaceG32, replaceG33,
    setGameatrest,
    reset
})(Board);

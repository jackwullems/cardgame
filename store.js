import { Alert } from 'react-native'
import {cardSize} from './components/helpers'
import {createDeck, createRoyal, shuffle, cardtoNumber} from './components/helpers';

export const b1 = {
    id: 'b1',
    cards: [{
        id: null,
        faceDown: null,
        portrait: false,
    }],
}

export const b2 = {
    id: 'b2',
    cards: [{
        id: null,
        faceDown: null,
        portrait: false,
    }],
}

export const b3 = {
    id: 'b3',
    cards: [{
        id: null,
        faceDown: null,
        portrait: false,
    }],
}

export const g11 = {
    id: 'g11',
    cards: [{
        id: null,
        faceDown: null,
        portrait: true,
    }],
}

export const g12 = {
    id: 'g12',
    cards: [{
        id: null,
        faceDown: null,
        portrait: true,
    }],
}

export const g13 = {
    id: 'g13',
    cards: [{
        id: null,
        faceDown: null,
        portrait: true,
    }],
}

export const g21 = {
    id: 'g21',
    cards: [{
        id: null,
        faceDown: null,
        portrait: true,
    }],
}

export const g22 = {
    id: 'g22',
    cards: [{
        id: null,
        faceDown: null,
        portrait: true,
    }],
}

export const g23 = {
    id: 'g23',
    cards: [{
        id: null,
        faceDown: null,
        portrait: true,
    }],
}

export const g31 = {
    id: 'g31',
    cards: [{
        id: null,
        faceDown: null,
        portrait: true,
    }],
}

export const g32 = {
    id: 'g32',
    cards: [{
        id: null,
        faceDown: null,
        portrait: true,
    }],
}

export const g33 = {
    id: 'g33',
    cards: [{
        id: null,
        faceDown: null,
        portrait: true,
    }],
}

export const l1 = {
    id: 'l1',
    cards: [{
        id: null,
        faceDown: null,
        portrait: true,
    }],
}

export const l2 = {
    id: 'l2',
    cards: [{
        id: null,
        faceDown: null,
        portrait: true,
    }],
}

export const l3 = {
    id: 'l3',
    cards: [{
        id: null,
        faceDown: null,
        portrait: true,
    }],
}

export const r1 = {
    id: 'r1',
    cards: [{
        id: null,
        faceDown: null,
        portrait: false,
    }],
}

export const r2 = {
    id: 'r2',
    cards: [{
        id: null,
        faceDown: null,
        portrait: false,
    }],
}

export const r3 = {
    id: 'r3',
    cards: [{
        id: null,
        faceDown: null,
        portrait: false,
    }],
}

export const t1 = {
    id: 't1',
    cards: [{
        id: null,
        faceDown: null,
        portrait: false,
    }],
}

export const t2 = {
    id: 't2',
    cards: [{
        id: null,
        faceDown: null,
        portrait: false,
    }],
}

export const t3 = {
    id: 't3',
    cards: [{
        id: null,
        faceDown: null,
        portrait: false,
    }],
}

export const w1 = {
    id: 'w1',
    cards: [{
        id: null,
        faceDown: null,
        portrait: false,
    }],
}

export const w2 = {
    id: 'w2',
    cards: [{
        id: null,
        faceDown: null,
        portrait: false,
    }],
}

export const w3 = {
    id: 'w3',
    cards: [{
        id: null,
        faceDown: null,
        portrait: false,
    }],
}

export const royal = {
    id: 'royal',
    cards: shuffle(createRoyal()),
}

export const pot = {
    id: 'pot',
    cards: shuffle(createDeck()),
    gameatrest: true
}

export const pend = {
    id: 'pend',
    cards: [{
        id: null,
        faceDown: null,
        portrait: true,
    }],
    pending: false
}

export const location = {
    t1: null,
    t2: null,
    t3: null,
    l1: null,
    l2: null,
    l3: null,
    g11: null,
    g12: null,
    g13: null,
    g21: null,
    g22: null,
    g23: null,
    g31: null,
    g32: null,
    g33: null,
    r1: null,
    r2: null,
    r3: null,
    w1: null,
    w2: null,
    w3: null,
    b1: null,
    b2: null,
    b3: null,
    royal: null,
    pot: null,
    pend: null
}

export const ground = {
    t1,
    t2,
    t3,
    l1,
    l2,
    l3,
    g11,
    g12,
    g13,
    g21,
    g22,
    g23,
    g31,
    g32,
    g33,
    r1,
    r2,
    r3,
    w1,
    w2,
    w3,
    b1,
    b2,
    b3,
    royal,
    pot,
    pend
}

export const deal = {
    init: false
}

export function logicFlip() {
    return ground.pot.gameatrest
}

export function logicRlease(from, to) {
    if (from.id == to.id) {
        return 'fix'
    }
    if (from.id === 'pot') {
        return 'move'
    }
    if (to.id === 'royal') {
        return 'not'
    }
    if (to.id === 'pend') {
        return 'not'
    }
    if (to.id === 'pot') {
        return 'not'
    }
    if (from.id === 'royal') {
        switch (to.id) {
            case 't1':
                return ground.t1.cards.length==1?'move':'not'
            case 't2':
                return ground.t1.cards.length==1?'move':'not'
            case 't3':
                return ground.t1.cards.length==1?'move':'not'
            case 'r1':
                return ground.t1.cards.length==1?'move':'not'
            case 'r2':
                return ground.t1.cards.length==1?'move':'not'
            case 'r3':
                return ground.t1.cards.length==1?'move':'not'
            default:
                return 'not'
        }
    }
    if (to.cards.length < 2) {
        return 'move'
    }
    // const t = (Math.floor(Date.now()/3000)%3)
    // switch (t) {
    //     case 0:
    //         return 'move'
    //     case 1:
    //         return 'not'
    //     case 2:
    //         return 'replace'
    //     default:
    //         return 'move'
    // }
    return 'move'
}

export function logicDrop(from, to, pass, fail, couple, replace) {
    if (from.id == 'royal') {
        if (ground[to.id].cards.length>1) {
            fail()
            return
        }
        logicRoyalDrop(to)?pass():fail()
        return
    }
    switch (to.id) {
        case 't1': case 't2': case 't3':
        case 'l1': case 'l2': case 'l3':
        case 'r1': case 'r2': case 'r3':
        case 'b1': case 'b2': case 'b3':
            Alert.alert(
                'logic question',
                'You can pass or fail',
                [
                    {text: 'pass', onPress: ()=>{
                        pass()
                    }},
                    {text: 'fail', onPress: ()=>{
                        fail()
                    }}
                ]
            )
            return
        default:
            if (ground[to.id].cards.length < 2) {
                Alert.alert(
                    'logic question',
                    'You can pass or fail',
                    [
                        {text: 'pass', onPress: ()=>{
                            pass()
                        }},
                        {text: 'fail', onPress: ()=>{
                            fail()
                        }}
                    ]
                )
                return
            }
            const sum = cardtoNumber(ground[from.id].cards[ground[from.id].cards.length-1])+cardtoNumber(ground[to.id].cards[ground[to.id].cards.length-1])
            Alert.alert(
                'logic question',
                'SUM='+sum,
                [
                    {text: 'fail', onPress: ()=>{
                        fail()
                    }},
                    {text: 'couple', onPress: ()=>{
                        couple()
                    }},
                    {text: 'replace', onPress: ()=>{
                        replace()
                    }},
                ]
            )
            return
    }

}

export function logicRoyalDrop(to) {
    var sum = 0
    switch (to.id) {
        case 't1':
            sum += cardtoNumber(ground.g11.cards[ground.g11.cards.length-1])
            sum += cardtoNumber(ground.g21.cards[ground.g21.cards.length-1])
            sum += cardtoNumber(ground.g31.cards[ground.g31.cards.length-1])
            break
        case 't2':
            sum += cardtoNumber(ground.g12.cards[ground.g12.cards.length-1])
            sum += cardtoNumber(ground.g22.cards[ground.g22.cards.length-1])
            sum += cardtoNumber(ground.g32.cards[ground.g32.cards.length-1])
            break
        case 't3':
            sum += cardtoNumber(ground.g13.cards[ground.g13.cards.length-1])
            sum += cardtoNumber(ground.g23.cards[ground.g23.cards.length-1])
            sum += cardtoNumber(ground.g33.cards[ground.g33.cards.length-1])
            break
        case 'r1':
            sum += cardtoNumber(ground.g11.cards[ground.g11.cards.length-1])
            sum += cardtoNumber(ground.g12.cards[ground.g12.cards.length-1])
            sum += cardtoNumber(ground.g13.cards[ground.g13.cards.length-1])
            break
        case 'r2':
            sum += cardtoNumber(ground.g21.cards[ground.g21.cards.length-1])
            sum += cardtoNumber(ground.g22.cards[ground.g22.cards.length-1])
            sum += cardtoNumber(ground.g23.cards[ground.g23.cards.length-1])
            break
        case 'r3':
            sum += cardtoNumber(ground.g31.cards[ground.g31.cards.length-1])
            sum += cardtoNumber(ground.g32.cards[ground.g32.cards.length-1])
            sum += cardtoNumber(ground.g33.cards[ground.g33.cards.length-1])
            break
    }
    return sum==20
}

export function logicTap() {
    // alert("It's logic for tap")
    // alert("It's logic for tap table:"+table.id+'card:'+table.cards[table.cards.length-1].id)
}
    

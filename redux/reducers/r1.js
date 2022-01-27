import {RESET, ADDR1, POPR1, REPLACER1} from '../actions'
import {ground, r1} from '../../store'

export default (state=r1, action) => {
    switch (action.type) {
        case ADDR1:
            const cards = [...state.cards]
            cards.push(action.payload)
            ground.r1 = {
                ...state,
                cards
            }
            return ground.r1
        case POPR1: {
            const cards = [...state.cards]
            cards.pop()
            ground.r1 = {
                ...state,
                cards
            }
            return ground.r1
        }
        case REPLACER1: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.r1 = {
                ...state,
                cards
            }
            return ground.r1
        }
        case RESET:
            ground.r1 = r1
            return ground.r1
        default:
            return state
    }
}
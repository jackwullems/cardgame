import {RESET, ADDG11, POPG11, REPLACEG11} from '../actions'
import {ground, g11} from '../../store'

export default (state=g11, action) => {
    switch (action.type) {
        case ADDG11:
            const cards = [...state.cards]
            cards.push(action.payload)
            ground.g11 = {
                ...state,
                cards
            }
            return ground.g11
            case POPG11: {
                const cards = [...state.cards]
                cards.pop()
                ground.g11 = {
                    ...state,
                    cards
                }
                return ground.g11
                }
        case REPLACEG11: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.g11 = {
                ...state,
                cards
            }
            return ground.g11
        }
        case RESET:
            ground.g11 = g11
            return ground.g11
        default:
            return state
    }
}
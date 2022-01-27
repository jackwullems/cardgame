import {RESET, ADDG22, POPG22, REPLACEG22} from '../actions'
import {ground, g22} from '../../store'

export default (state=g22, action) => {
    switch (action.type) {
        case ADDG22:
                const cards = [...state.cards]
                cards.push(action.payload)
                ground.g22 = {
                    ...state,
                    cards
                }
                return ground.g22
                case POPG22: {
                    const cards = [...state.cards]
                    cards.pop()
                    ground.g22 = {
                        ...state,
                        cards
                    }
                    return ground.g22
                    }
        case REPLACEG22: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.g22 = {
                ...state,
                cards
            }
            return ground.g22
        }
        case RESET:
            ground.g22 = g22
            return ground.g22
        default:
            return state
    }
}
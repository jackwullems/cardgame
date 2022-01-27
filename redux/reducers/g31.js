import {RESET, ADDG31, POPG31, REPLACEG31} from '../actions'
import {ground, g31} from '../../store'

export default (state=g31, action) => {
    switch (action.type) {
        case ADDG31:
                const cards = [...state.cards]
                cards.push(action.payload)
                ground.g31 = {
                    ...state,
                    cards
                }
                return ground.g31
                case POPG31: {
                    const cards = [...state.cards]
                    cards.pop()
                    ground.g31 = {
                        ...state,
                        cards
                    }
                    return ground.g31
                    }
        case REPLACEG31: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.g31 = {
                ...state,
                cards
            }
            return ground.g31
        }
        case RESET:
            ground.g31 = g31
            return ground.g31
        default:
            return state
    }
}
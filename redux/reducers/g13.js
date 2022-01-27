import {RESET, ADDG13, POPG13, REPLACEG13} from '../actions'
import {ground, g13} from '../../store'

export default (state=g13, action) => {
    switch (action.type) {
        case ADDG13:
                const cards = [...state.cards]
                cards.push(action.payload)
                ground.g13 = {
                    ...state,
                    cards
                }
                return ground.g13
                    case POPG13: {
                    const cards = [...state.cards]
                    cards.pop()
                    ground.g13 = {
                        ...state,
                        cards
                    }
                    return ground.g13
                        }
        case REPLACEG13: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.g13 = {
                ...state,
                cards
            }
            return ground.g13
        }
        case RESET:
            ground.g13 = g13
            return ground.g13

        default:
            return state
    }
}
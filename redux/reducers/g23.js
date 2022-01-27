import {RESET, ADDG23, POPG23, REPLACEG23} from '../actions'
import {ground, g23} from '../../store'

export default (state=g23, action) => {
    switch (action.type) {
        case ADDG23:
                const cards = [...state.cards]
                cards.push(action.payload)
                ground.g23 = {
                    ...state,
                    cards
                }
                return ground.g23
                case POPG23: {
                    const cards = [...state.cards]
                    cards.pop()
                    ground.g23 = {
                        ...state,
                        cards
                    }
                    return ground.g23
                    }
        case REPLACEG23: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.g23 = {
                ...state,
                cards
            }
            return ground.g23
        }
        case RESET:
            ground.g23 = g23
            return ground.g23
        default:
            return state
    }
}
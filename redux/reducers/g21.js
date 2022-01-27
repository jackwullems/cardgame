import {RESET, ADDG21, POPG21, REPLACEG21} from '../actions'
import {ground, g21} from '../../store'

export default (state=g21, action) => {
    switch (action.type) {
        case ADDG21:
                const cards = [...state.cards]
                cards.push(action.payload)
                ground.g21 = {
                    ...state,
                    cards
                }
                return ground.g21
                    case POPG21: {
                    const cards = [...state.cards]
                    cards.pop()
                    ground.g21 = {
                        ...state,
                        cards
                    }
                    return ground.g21
                        }
        case REPLACEG21: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.g21 = {
                ...state,
                cards
            }
            return ground.g21
        }
        case RESET:
            ground.g21 = g21
            return ground.g21
        
        default:
            return state
    }
}
import {RESET, ADDG33, POPG33, REPLACEG33} from '../actions'
import {ground, g33} from '../../store'

export default (state=g33, action) => {
    switch (action.type) {
        case ADDG33:
                const cards = [...state.cards]
                cards.push(action.payload)
                ground.g33 = {
                    ...state,
                    cards
                }
                return ground.g33
                case POPG33: {
                    const cards = [...state.cards]
                    cards.pop()
                    ground.g33 = {
                        ...state,
                        cards
                    }
                    return ground.g33
                    }
        case REPLACEG33: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.g33 = {
                ...state,
                cards
            }
            return ground.g33
        }
        case RESET:
            ground.g33 = g33
            return ground.g33
        default:
            return state
    }
}
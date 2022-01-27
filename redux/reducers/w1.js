import {RESET, ADDW1, POPW1, REPLACEW1} from '../actions'
import {ground, w1} from '../../store'

export default (state=w1, action) => {
    switch (action.type) {
        case ADDW1:
                const cards = [...state.cards]
                cards.push(action.payload)
                ground.w1 = {
                    ...state,
                    cards
                }
                return ground.w1
                case POPW1: {
                    const cards = [...state.cards]
                    cards.pop()
                    ground.w1 = {
                        ...state,
                        cards
                    }
                    return ground.w1
                    }
        case REPLACEW1: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.w1 = {
                ...state,
                cards
            }
            return ground.w1
        }
        case RESET:
            ground.w1 = w1
            return ground.w1
        default:
            return state
    }
}
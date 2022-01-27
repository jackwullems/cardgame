import {RESET, ADDW2, POPW2, REPLACEW2} from '../actions'
import {ground, w2} from '../../store'

export default (state=w2, action) => {
    switch (action.type) {
        case ADDW2:
                const cards = [...state.cards]
                cards.push(action.payload)
                ground.w2 = {
                    ...state,
                    cards
                }
                return ground.w2
                case POPW2: {
                    const cards = [...state.cards]
                    cards.pop()
                    ground.w2 = {
                        ...state,
                        cards
                    }
                    return ground.w2
                    }
        case REPLACEW2: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.w2 = {
                ...state,
                cards
            }
            return ground.w2
        }
        case RESET:
            ground.w2 = w2
            return ground.w2
        default:
            return state
    }
}
import {RESET, ADDW3, POPW3, REPLACEW3} from '../actions'
import {ground, w3} from '../../store'

export default (state=w3, action) => {
    switch (action.type) {
        case ADDW3:
                const cards = [...state.cards]
                cards.push(action.payload)
                ground.w3 = {
                    ...state,
                    cards
                }
                return ground.w3
                case POPW3: {
                    const cards = [...state.cards]
                    cards.pop()
                    ground.w3 = {
                        ...state,
                        cards
                    }
                    return ground.w3
                    }
        case REPLACEW3: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.w3 = {
                ...state,
                cards
            }
            return ground.w3
        }
        case RESET:
            ground.w3 = w3
            return ground.w3
        default:
            return state
    }
}
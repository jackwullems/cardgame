import {RESET, ADDG12, POPG12, REPLACEG12} from '../actions'
import {ground, g12} from '../../store'

export default (state=g12, action) => {
    switch (action.type) {
        case ADDG12:
                const cards = [...state.cards]
                cards.push(action.payload)
                ground.g12 = {
                    ...state,
                    cards
                }
                return ground.g12
               case POPG12: {
                    const cards = [...state.cards]
                    cards.pop()
                    ground.g12 = {
                        ...state,
                        cards
                    }
                    return ground.g12
                                }
        case REPLACEG12: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.g12 = {
                ...state,
                cards
            }
            return ground.g12
        }
        case RESET:
            ground.g12 = g12
            return ground.g12
        default:
            return state
    }
}
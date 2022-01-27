import {RESET, ADDB1, POPB1, REPLACEB1} from '../actions'
import {ground, b1} from '../../store'

export default (state=b1, action) => {
    switch (action.type) {
        case ADDB1:
            const cards = [...state.cards]
            cards.push(action.payload)
            ground.b1 = {
                ...state,
                cards
            }
            return ground.b1
        case POPB1: {
            const cards = [...state.cards]
            cards.pop()
            ground.b1 = {
                ...state,
                cards
            }
            return ground.b1
        }
        case REPLACEB1: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.b1 = {
                ...state,
                cards
            }
            return ground.b1
        }
        case RESET:
            ground.b1 = b1
            return ground.b1
        default:
            return state
    }
}
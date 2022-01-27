import {RESET, ADDB3, POPB3, REPLACEB3} from '../actions'
import {ground, b3} from '../../store'

export default (state=b3, action) => {
    switch (action.type) {
        case ADDB3:
            const cards = [...state.cards]
            cards.push(action.payload)
            ground.b3 = {
                ...state,
                cards
            }
            return ground.b3
        case POPB3: {
            const cards = [...state.cards]
            cards.pop()
            ground.b3 = {
                ...state,
                cards
            }
            return ground.b3
        }
        case REPLACEB3: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.b3 = {
                ...state,
                cards
            }
            return ground.b3
        }
        case RESET:
            ground.b3 = b3
            return ground.b3
        default:
            return state
    }
}
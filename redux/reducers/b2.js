import {RESET, ADDB2, POPB2, REPLACEB2} from '../actions'
import {ground, b2} from '../../store'

export default (state=b2, action) => {
    switch (action.type) {
        case ADDB2:
            const cards = [...state.cards]
            cards.push(action.payload)
            ground.b2 = {
                ...state,
                cards
            }
            return ground.b2
        case POPB2: {
            const cards = [...state.cards]
            cards.pop()
            ground.b2 = {
                ...state,
                cards
            }
            return ground.b2
        }
        case REPLACEB2: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.b2 = {
                ...state,
                cards
            }
            return ground.b2
        }
        case RESET:
            ground.b2 = b2
            return ground.b2
        default:
            return state
    }
}
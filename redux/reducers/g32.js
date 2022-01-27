import {RESET, ADDG32, POPG32, REPLACEG32} from '../actions'
import {ground, g32} from '../../store'

export default (state=g32, action) => {
    switch (action.type) {
        case ADDG32:
            const cards = [...state.cards]
            cards.push(action.payload)
            ground.g32 = {
                ...state,
                cards
            }
            return ground.g32
        case POPG32: {
            const cards = [...state.cards]
            cards.pop()
            ground.g32 = {
                ...state,
                cards
            }
            return ground.g32
        }
        case REPLACEG32: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.g32 = {
                ...state,
                cards
            }
            return ground.g32
        }
        case RESET:
            ground.g32 = g32
            return ground.g32
        default:
            return state
    }
}
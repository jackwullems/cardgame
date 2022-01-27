import {RESET, ADDT1, POPT1, REPLACET1} from '../actions'
import {ground, t1} from '../../store'

export default (state=t1, action) => {
    switch (action.type) {
        case ADDT1:
            const cards = [...state.cards]
            cards.push(action.payload)
            ground.t1 = {
                ...state,
                cards
            }
            return ground.t1
        case POPT1: {
            const cards = [...state.cards]
            cards.pop()
            ground.t1 = {
                ...state,
                cards
            }
            return ground.t1
        }
        case REPLACET1: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.t1 = {
                ...state,
                cards
            }
            return ground.t1
        }
        case RESET:
            ground.t1 = t1
            return ground.t1
        default:
            return state
    }
}
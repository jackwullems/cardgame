import {RESET, ADDT2, POPT2, REPLACET2} from '../actions'
import {ground, t2} from '../../store'

export default (state=t2, action) => {
    switch (action.type) {
        case ADDT2:
            const cards = [...state.cards]
            cards.push(action.payload)
            ground.t2 = {
                ...state,
                cards
            }
            return ground.t2
        case POPT2: {
            const cards = [...state.cards]
            cards.pop()
            ground.t2 = {
                ...state,
                cards
            }
            return ground.t2
        }
        case REPLACET2: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.t2 = {
                ...state,
                cards
            }
            return ground.t2
        }
        case RESET:
            ground.t2 = t2
            return ground.t2
        default:
            return state
    }
}
import {RESET, ADDL3, POPL3, REPLACEL3} from '../actions'
import {ground, l3} from '../../store'

export default (state=l3, action) => {
    switch (action.type) {
        case ADDL3:
            const cards = [...state.cards]
            cards.push(action.payload)
            ground.l3 = {
                ...state,
                cards
            }
            return ground.l3
        case POPL3: {
            const cards = [...state.cards]
            cards.pop()
            ground.l3 = {
                ...state,
                cards
            }
            return ground.l3
        }
        case REPLACEL3: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.l3 = {
                ...state,
                cards
            }
            return ground.l3
        }
        case RESET:
            ground.l3 = l3
            return ground.l3
        default:
            return state
    }
}
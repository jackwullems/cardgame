import {RESET, ADDPEND, POPPEND} from '../actions'
import {ground, pend} from '../../store'

export default (state=pend, action) => {
    switch (action.type) {
        case ADDPEND:
            const cards = [...state.cards]
            cards.push(action.payload)
            ground.pend = {
                ...state,
                cards,
                pending: true
            }
            return ground.pend
        case POPPEND: {
            const cards = [...state.cards]
            cards.pop()
            ground.pend = {
                ...state,
                cards,
                pending: false
            }
            return ground.pend
        }
        case RESET:
            ground.pend = pend
            return ground.pend
        default:
            return state
    }
}
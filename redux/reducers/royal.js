import { RESET, ADDROYAL, POPROYAL, REPLACEROYAL } from '../actions'
import { ground, royal } from '../../store'

export default (state = royal, action) => {
    switch (action.type) {
        case ADDROYAL:
            const cards = [...state.cards]
            action.payload.faceDown = true
            cards.push(action.payload)
            ground.royal = {
                ...state,
                cards,
            }
            return ground.royal
        case POPROYAL: {
            const cards = [...state.cards]
            cards.pop()
            ground.royal = {
                ...state,
                cards
            }
            return ground.royal
        }
        case REPLACEROYAL: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.royal = {
                ...state,
                cards
            }
            return ground.royal
        }
        case RESET:
            return royal
        default:
            return state
    }
}
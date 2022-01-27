import {RESET, ADDL2, POPL2, REPLACEL2} from '../actions'
import {ground, l2} from '../../store'

export default (state=l2, action) => {
    switch (action.type) {
        case ADDL2:
                const cards = [...state.cards]
                cards.push(action.payload)
                ground.l2 = {
                    ...state,
                    cards
                }
                return ground.l2
                case POPL2: {
                    const cards = [...state.cards]
                    cards.pop()
                    ground.l2 = {
                        ...state,
                        cards
                    }
                    return ground.l2
                    }
        case REPLACEL2: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.l2 = {
                ...state,
                cards
            }
            return ground.l2
        }
        case RESET:
            ground.l2 = l2
            return ground.l2
        default:
            return state
    }
}
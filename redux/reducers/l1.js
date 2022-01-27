import {RESET, ADDL1, POPL1, REPLACEL1} from '../actions'
import {ground, l1} from '../../store'

export default (state=l1, action) => {
    switch (action.type) {
        case ADDL1:
                const cards = [...state.cards]
                cards.push(action.payload)
                ground.l1 = {
                    ...state,
                    cards
                }
                return ground.l1
                case POPL1: {
                    const cards = [...state.cards]
                    cards.pop()
                    ground.l1 = {
                        ...state,
                        cards
                    }
                    return ground.l1
                        }
        case REPLACEL1: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.l1 = {
                ...state,
                cards
            }
            return ground.l1
        }
        case RESET:
            ground.l1 = l1
            return ground.l1
        default:
            return state
    }
}
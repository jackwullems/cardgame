import {RESET, ADDR3, POPR3, REPLACER3} from '../actions'
import {ground, r3} from '../../store'

export default (state=r3, action) => {
    switch (action.type) {
        case ADDR3:
                const cards = [...state.cards]
                cards.push(action.payload)
                ground.r3 = {
                    ...state,
                    cards
                }
                return ground.r3
                case POPR3: {
                    const cards = [...state.cards]
                    cards.pop()
                    ground.r3 = {
                        ...state,
                        cards
                    }
                    return ground.r3
                    }
        case REPLACER3: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.r3 = {
                ...state,
                cards
            }
            return ground.r3
        }
        case RESET:
            ground.r3 = r3
            return ground.r3
        default:
            return state
    }
}
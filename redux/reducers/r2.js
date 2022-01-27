import {RESET, ADDR2, POPR2, REPLACER2} from '../actions'
import {ground, r2} from '../../store'

export default (state=r2, action) => {
    switch (action.type) {
        case ADDR2:
                const cards = [...state.cards]
                cards.push(action.payload)
                ground.r2 = {
                    ...state,
                    cards
                }
                return ground.r2
                case POPR2: {
                    const cards = [...state.cards]
                    cards.pop()
                    ground.r2 = {
                        ...state,
                        cards
                    }
                    return ground.r2
                    }
        case REPLACER2: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.r2 = {
                ...state,
                cards
            }
            return ground.r2
        }
        case RESET:
            ground.r2 = r2
            return ground.r2
        default:
            return state
    }
}
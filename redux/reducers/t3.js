import {RESET, ADDT3, POPT3, REPLACET3} from '../actions'
import {ground, t3} from '../../store'

export default (state=t3, action) => {
    switch (action.type) {
        case ADDT3:
                const cards = [...state.cards]
                cards.push(action.payload)
                ground.t3 = {
                    ...state,
                    cards
                }
                return ground.t3
                case POPT3: {
                    const cards = [...state.cards]
                    cards.pop()
                    ground.t3 = {
                        ...state,
                        cards
                    }
                    return ground.t3
                    }
        case REPLACET3: {
            const cards = [...state.cards]
            cards.pop()
            cards.push(action.payload)
            ground.t3 = {
                ...state,
                cards
            }
            return ground.t3
        }
        case RESET:
            ground.t3 = t3
            return ground.t3
        default:
            return state
    }
}
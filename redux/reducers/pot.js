import {RESET, ADDPOT, SETPOT, POPPOT, SETGAMEATREST} from '../actions'
import {ground, pot} from '../../store'
import {createDeck, shuffle} from '../../components/helpers'

export default (state=pot, action) => {
    switch (action.type) {
        case ADDPOT:
            const cards = [...state.cards]
            cards.push(action.payload)
            ground.pot = {
                ...state,
                cards
            }
            return ground.pot
        case SETPOT:
            ground.pot = {
                ...state,
                cards: action.payload.concat()
            } 
            return ground.pot
        case POPPOT: {
            const cards = [...state.cards]
            cards.pop()
            ground.pot = {
                ...state,
                cards
            } 
            return ground.pot
        }
        case RESET:
            // ground.pot = pot
            ground.pot = {
                id: 'pot',
                cards: shuffle(createDeck()),
                portrait: true,
                gameatrest: true
            }
            return ground.pot
        case SETGAMEATREST:
            ground.pot = {
                ...state,
                gameatrest: action.payload
            } 
            return ground.pot
        default:
            return state
    }
}

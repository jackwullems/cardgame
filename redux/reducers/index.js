import { combineReducers } from 'redux'
import t1 from './t1'
import t2 from './t2'
import t3 from './t3'
import l1 from './l1'
import l2 from './l2'
import l3 from './l3'
import r1 from './r1'
import r2 from './r2'
import r3 from './r3'
import b1 from './b1'
import b2 from './b2'
import b3 from './b3'
import w1 from './w1'
import w2 from './w2'
import w3 from './w3'
import g11 from './g11'
import g12 from './g12'
import g13 from './g13'
import g21 from './g21'
import g22 from './g22'
import g23 from './g23'
import g31 from './g31'
import g32 from './g32'
import g33 from './g33'
import royal from './royal'
import pot from './pot'
import pend from './pend'

const rootReducer = combineReducers({
  t1, t2, t3,
  l1, l2, l3,
  g11, g12, g13, g21, g22, g23, g31, g32, g33,
  r1, r2, r3,
  w1, w2, w3,
  b1, b2, b3,
  royal, pot, pend
})
  
  export default rootReducer
  
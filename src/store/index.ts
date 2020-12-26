import { createStore, Store } from 'redux'
import { IRootState } from './store'
import rootReducer from './modules/rootReducer'

export const store: Store<IRootState> = createStore(rootReducer)

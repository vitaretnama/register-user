import { authInitState } from './states'
import {
  beginSignIn,
  successSignIn,
  failSignIn,
  successLogout,
  failLogout,
} from './mutations'
import {
  signInAction,
  logOutAction,
} from './actions'

export const authentication = {
  state: () => authInitState,
  mutations: {
    beginSignIn,
    successSignIn,
    failSignIn,
    successLogout,
    failLogout
  },
  actions: {
    signInAction,
    logOutAction,
  },
}

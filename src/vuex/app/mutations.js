/**
 * Created by MOMO on 16/11/1.
 */
import { CHANGE_LEFTNAV_STATE } from './mutation-type'
const mutations = {
  [CHANGE_LEFTNAV_STATE] (state, isShow) {
    state.leftNavState = isShow
  }
}
export default mutations

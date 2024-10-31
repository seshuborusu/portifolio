import {legacy_createStore} from "redux"
import reducer from "./reducer"
var mystore=legacy_createStore(reducer)
export default mystore
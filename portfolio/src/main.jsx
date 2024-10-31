import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import mystore from "./components/reduxstore/store"
import {Provider} from "react-redux"

ReactDOM.render(<Provider store={mystore}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById("root"))
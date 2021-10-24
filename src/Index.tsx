import React from "react"
import ReactDOM from "react-dom"
import { Router } from "react-router-dom"
import { createBrowserHistory } from "history";
//Components
import App from "./App"
//SCSS
import "./style_sheets/index.scss"



history.scrollRestoration = "manual"
const BrowserHistory = createBrowserHistory()

ReactDOM.render(
    <React.StrictMode>
        <Router history={BrowserHistory}>
            <App/>
        </Router>
    </React.StrictMode>
    , document.getElementById("root")
)
import React from "react"
import ReactDom from "react-dom"
import "./style.css";
import App from "../src/component/App"
import {BrowserRouter as Router} from "react-router-dom"

ReactDom.render(<Router>
                    <App/>
                </Router>,
                    document.getElementById("root"))
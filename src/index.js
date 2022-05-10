import ReactDOM from "react-dom"
import React from "react"
import App from "./App"
import Reset from "./styles/reset"

ReactDOM.render(<React.StrictMode>
                    <Reset/>
                    <App />
                </React.StrictMode>, document.querySelector('.root'))
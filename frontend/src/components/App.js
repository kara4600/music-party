import React from "react";
import { render } from "react-dom";

const App = () => {
    return (
        <div>
            <h1>Hi there</h1>
        </div>
    );
}

export default App;
const appDiv = document.getElementById("app");
render(<App />, appDiv);

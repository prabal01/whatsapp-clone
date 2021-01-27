import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
function App() {
    return (
        <div className="App">

            <div className="app__body">
                <Sidebar />
                <Chat />
            </div>
        </div>

    )
}
export default App


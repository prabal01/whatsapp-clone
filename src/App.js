import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
// import { Switch } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login"
import { useStateValue } from "./components/stateprovide/StateProvider";
function App() {
    const [{user}, dispatch ]= useStateValue();

    return (
        <div className="App">
            {!user ? (<Login />):
            (
                
            <div className="app__body">
                <Router>
                    <Sidebar />
                    <Switch >
                        <Route path="/rooms/:roomId">
                            <Chat />
                        </Route>
                        <Route path="/">
                            {/* <Chat /> */}
                        </Route>
                    </Switch>
                </Router>

            </div>
            )
            }
        </div>

    )
}
export default App


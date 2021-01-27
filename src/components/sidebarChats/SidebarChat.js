import React, { useState, useEffect } from "react";
import "./SidebarChat.css"
import { Avatar } from "@material-ui/core";
import db from "../../firebase"

function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState("")
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const createChat = () => {
        const roomName = prompt("please enter a name for chat")
        if (roomName) {
            db.collection('rooms').add({name: roomName})
        }
    }


    return !addNewChat ? (
        <div>
            <div className="sidebarChat">
                <Avatar src={'https://avatars.dicebear.com/api/human/' + seed + '.svg'} />
                <div className="sidebarChar_info">
                    <h2>{name}</h2>
                    <p>
                        last message...
                    </p>
                </div>

            </div>
        </div>
    ) : (

            <div onClick={createChat}
                className="sidebarChat">
                <h2>
                    Add New Chat
                </h2>
            </div>

        )
}
export default SidebarChat
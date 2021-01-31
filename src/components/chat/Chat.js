import React, { useState, useEffect } from "react";
import "./Chat.css";
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from "react-router-dom";
import db from "../../firebase"

function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName ] = useState("");

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot((snapshot) =>
                setRoomName(snapshot.data().name
                )
            )
        }
    }, [roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("input :", input)
        setInput("")
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={'https://avatars.dicebear.com/api/human/' + seed + '.svg'} />

                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p> last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && 'chat__reciever'}`}><span className="chat__name">Prabal Saxena</span> hello everyone <span className="timestamp">04:12pm</span> </p>
                <p className="chat__message">hello everyone</p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input placeholder="Type a message" value={input} onChange={e => setInput(e.target.value)} type="text" />
                    <button onClick={sendMessage} type="submit">send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
};
export default Chat;
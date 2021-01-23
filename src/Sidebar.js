import React from "react";
import "./Sidebar.css"
import { Avatar, IconButton } from "@material-ui/core"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <IconButton>
                    <Avatar />
                </IconButton>
                <div className="sidebar__header__right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                    {/* <MoreVertIcon /> */}
                </div>
            </div>
            <div className="sidebar__search">

            </div>
            <div className="sidebar__chats">

            </div>
        </div>
    )
}
export default Sidebar
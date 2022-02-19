import React from "react";
import './App.css';

export const ChatBody = ({state, removeMessage}) => {
    debugger
    return(
        <div className="chatBody">
            {state.messages.length !== 0 
                ? state.messages.map(message=>
                    <div key={message.id} onClick={()=>removeMessage(message)}>
                        {message.text}{new Date().toLocaleTimeString().slice(0,-3)}
                    </div>)
                : "Message history is empty"
            }
        </div>
    )
}
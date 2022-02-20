import React from "react";
import './App.css';

export const ChatBody = ({state, removeMessage}) => {
    const date = new Date().toLocaleTimeString().slice(0,-3);
    return (
      <div className="chatBody">
        <div>
          {state.messages.length !== 0
            ? state.messages.map((message) => (
                <div key={message.id} onClick={() => removeMessage(message)} className="message_flexEnd">
                    <div className="message">
                        <div>
                            <div className="message_text">
                                <span>{message.text}</span>
                            </div>
                            <div className="date">
                                <span>{date}</span>
                            </div>
                        </div>
                    </div>
                </div>
              ))
            : "Message history is empty"}
        </div>
      </div>
    );
}
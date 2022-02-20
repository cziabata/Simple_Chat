import React from "react";
import { useState } from "react";
import './App.css';
import send_message_icon from "./IMG/send_message_icon.svg";

export const ChatForm = ({addNewMessage}) => {
    const [inputValue, setInputValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        addNewMessage(inputValue)
        setInputValue("")
    }
    const handleChange = (e) => {
        setInputValue(e.currentTarget.value)
    }
    return(
        <form onSubmit={handleSubmit} className="form">
            <input type="text" placeholder="Enter your message" onChange={handleChange} value={inputValue} className="input"/>
            <button className="button"><img src={send_message_icon} alt="Send Message Icon"/></button>
        </form>
    )
}
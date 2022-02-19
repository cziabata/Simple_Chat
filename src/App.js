import './App.css';
import { ChatBody } from "./ChatBody";
import { ChatForm } from "./ChatForm";
import { addMessage, deleteMessage } from "./REDUX/chatReducer";


function App({state, dispatch}) {
  const addNewMessage = (inputValue) => {
    if(inputValue){
      const newMessage = {
        id: Math.random().toString(30).substring(1,8),
        text: inputValue
      }
      dispatch(addMessage(newMessage))
    }
  }
  const removeMessage = (message) => {
    dispatch(deleteMessage(message))
  }
  return (
    <div className="App">
      <ChatBody state={state} removeMessage={removeMessage}/>
      <ChatForm addNewMessage={addNewMessage} />
    </div>
  );
}

export default App;

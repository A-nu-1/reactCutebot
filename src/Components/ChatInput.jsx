import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'



export function ChatInput({ messages, setMessages }) {
        const [inputValue, setInputValue] = useState('');

        function handleInputChange(event) {
          setInputValue(event.target.value);
        }

        function sendMessage(){

          const newMessages = [...messages, { message: inputValue, sender: "human", id: crypto.randomUUID(), time: new Date().valueOf() }];
          setMessages(newMessages);
          setInputValue('');    
          const response = Chatbot.getResponse(inputValue);
          setMessages([...newMessages, { message: response, sender: "robot", id: crypto.randomUUID(), time: new Date().valueOf() }]);

        }

          function clearMessages() {
    setMessages([]);
  }

  function checkEnterNSendMessage(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }

        return (
          <div className="chat-input-container">
            <input 
              placeholder="Type your message here..." 
              onKeyDown={checkEnterNSendMessage}
              onChange={handleInputChange}
              value={inputValue}
              className="chat-input"
            />
            <button onClick={sendMessage}
            className="send-button"
            >Send</button>
             <button
        onClick={clearMessages}
        className="clear-button"
      >Clear</button>
          </div>
        );
      }
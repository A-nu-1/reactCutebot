import {  useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css'

       
  function ChatMessages({ messages }) {
        const containerRef = useRef(null);
  
        useEffect(() => {
          const containerElem = containerRef.current;
          if (containerElem) {
            const lastMessage = containerElem.lastElementChild;
            if (lastMessage) {
              lastMessage.scrollIntoView({ block: 'end' });
            } else {
              containerElem.scrollTop = containerElem.scrollHeight;
            }
          }
        }, [messages]);

        return (
          <div className="chat-messages-container" ref={containerRef}>
            { messages.map((chatMessage) => {
              return <ChatMessage 
              message={chatMessage.message} 
                sender={chatMessage.sender} 
                  time={chatMessage.time}
                key={chatMessage.id} />;
              })}

           </div>
          );
      }

export default ChatMessages;
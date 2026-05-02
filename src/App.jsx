import { useState, useEffect} from 'react'
import { ChatInput } from './Components/ChatInput'
import  ChatMessages  from './Components/ChatMessages'
import { Chatbot } from 'supersimpledev'
import './App.css'


   

      function App() {    
        const [messages, setMessages] = useState(JSON.parse(localStorage.getItem('messages')) || [
          {message: "Hello cute bot! ", sender: "human", id:'id1',time: 1736127288920},
          {message: "Hello! How can I help you today?", sender: "robot", id:'id2',time: 1736127288920},
          {message: "tell me todays date ", sender: "human", id:'id3',time: 1736127288920},
          {message: "27th April", sender: "robot", id:'id4',time: 1736127288920}
        ]);

            useEffect(() => {
               Chatbot.addResponses({
              'goodbye': 'Goodbye. Have a great day!',
              'give me a unique id': function() {
                return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
              },
              'what is your name?': 'I am a Cute bot. Isnt it cuuuuuuuuuuuutttteeeeee?',
              'what is your favorite color?': 'I love all colors, but if I had to choose, I would say pink!',
              'tell me a joke': 'Why did the scarecrow win an award? Because he was outstanding in his field!',
              'what is the meaning of life?': 'The meaning of life is a philosophical question that has been debated for centuries. It can vary greatly depending on individual beliefs and perspectives.'
            }); }, []);
        
              useEffect(() => {
                 localStorage.setItem('messages', JSON.stringify(messages));
                }, [messages]);

        return (

          <div className="app-container">
          <div className="chat-app">
            <ChatMessages messages={messages} />
            <ChatInput messages={messages} setMessages={setMessages}/>            
          </div></div>
        );
      }

export default App

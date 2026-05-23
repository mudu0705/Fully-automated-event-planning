import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const botReplies = [
  "I can help you plan your event! What type of event are you organizing?",
  "Great choice! Our AI can handle scheduling, ticketing, and guest management automatically.",
  "I'd recommend our Pro plan for that. It includes unlimited events and advanced AI features.",
  "You can get started in minutes! Just click 'Get Started' and our AI will guide you through setup.",
  "Our platform supports weddings, corporate events, concerts, conferences, and more!",
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! I'm EventAI Assistant. How can I help you plan your perfect event? 🎉" }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(m => [...m, { from: 'user', text: userMsg }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(m => [...m, { from: 'bot', text: botReplies[Math.floor(Math.random() * botReplies.length)] }]);
    }, 1200);
  };

  return (
    <>
      <button className={`chatbot-trigger ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)}>
        <i className={`fas fa-${open ? 'times' : 'robot'}`}></i>
        {!open && <span className="chat-badge">AI</span>}
      </button>

      <div className={`chatbot-window glass-card ${open ? 'visible' : ''}`}>
        <div className="chat-header">
          <div className="chat-avatar"><i className="fas fa-robot"></i></div>
          <div>
            <div className="chat-name">EventAI Assistant</div>
            <div className="chat-status"><span className="live-dot"></span> Online</div>
          </div>
          <button className="chat-close" onClick={() => setOpen(false)}><i className="fas fa-times"></i></button>
        </div>

        <div className="chat-messages">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.from}`}>
              {m.from === 'bot' && <div className="msg-avatar"><i className="fas fa-robot"></i></div>}
              <div className="msg-bubble">{m.text}</div>
            </div>
          ))}
          {typing && (
            <div className="chat-msg bot">
              <div className="msg-avatar"><i className="fas fa-robot"></i></div>
              <div className="msg-bubble typing"><span></span><span></span><span></span></div>
            </div>
          )}
          <div ref={bottomRef}></div>
        </div>

        <div className="chat-input-wrap">
          <input
            value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send()}
            placeholder="Ask about event planning..."
          />
          <button className="chat-send" onClick={send}><i className="fas fa-paper-plane"></i></button>
        </div>
      </div>
    </>
  );
}

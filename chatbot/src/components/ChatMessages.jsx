import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import "../styles/ChatMessages.css";

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map(({ message, sender, id }) => {
        return <ChatMessage message={message} sender={sender} key={id} />;
      })}
    </div>
  );
}

export default ChatMessages;

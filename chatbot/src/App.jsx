import { useState } from "react";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";

import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <div className="app-container">
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;

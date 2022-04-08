
import './App.css';
import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "./configs/chatbotConfig";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

function App() {
  return (
      <div>

          <div className="App">
              <Chatbot
                  config={config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}
              />
          </div>

      </div>

  );
}

export default App;

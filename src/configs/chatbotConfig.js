import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import MessageParser from "../chatbot/MessageParser";
const botName = "ClearPayBot";

const config = {
    botName: botName,
    lang: "no",
    customStyles: {
        botMessageBox: {
            fontColor:"#000000",
            backgroundColor: "#778899",
        },

        chatButton: {
            fontColor:"#000000",
            backgroundColor: "#778899",
        },
    },
    initialMessages: [
        createChatBotMessage(
            `Hola ${botName}. Puedes consultarme cualquier duda.`
        ),
    ],
    state: {
        gist: "",
    },
    customComponents: {
        header: () => <div style={{ backgroundColor: 'withe', padding: "5px", borderRadius: "3px" }}>ClearpayBot</div>
        // Replaces the default bot avatar
    },
    widgets: [
        {
            widgetName: "messageParser",
            widgetFunc: (props) => <MessageParser {...props} />,
            mapStateToProps: ["gist"],
        },
    ],
};

export default config;

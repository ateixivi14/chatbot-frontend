import {getResponse} from "../components/chatbotClient";

class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state
    }
    parse = (message) => {
        const lowerCase = message.toLowerCase();

        if (
            lowerCase.includes("messageparser") ||
            lowerCase.includes("parse") ||
            lowerCase.includes("parser") ||
            lowerCase.includes("message parser")
        ) {
            return this.actionProvider.handleMessageParser();
        }
        console.log(message)

        return this.actionProvider.handleDefault(message);
    };

}

export default MessageParser;

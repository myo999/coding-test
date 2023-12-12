import Message from './Message';

class MessageThreadModel {
    constructor() {
        this.messages = [];
    }

    addMessage(sender, content) {
        const message = new Message(sender, content);
        this.messages.push(message);
    }
}

export default MessageThreadModel;

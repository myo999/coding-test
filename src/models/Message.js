class Message {
    constructor(sender, content) {
        this.sender = sender; // 'patient' or 'doctor'
        this.content = content;
        this.timestamp = new Date();
    }
}

export default Message;

import { useEffect, useRef } from 'react';
import Message from './Message';

const MessageThread = ({ messages }) => {
    const endOfMessagesRef = useRef(null);

    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);  // Dependency array with messages to trigger scroll on new message

    return (
        <div>
            {messages.map((msg, index) => (
                <Message key={index} sender={msg.sender} content={msg.content} timestamp={msg.timestamp} />
            ))}
            <div ref={endOfMessagesRef} /> {/* Invisible element to mark the end of messages */}
        </div>
    );
};

export default MessageThread;

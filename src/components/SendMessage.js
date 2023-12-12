import { useState } from 'react';

const SendMessage = ({ onSend,  userRole, toggleRole }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (content.trim()) {
            onSend(content);
            setContent('');
        }
    };

    const roleButtonClasses = userRole === 'Patient' 
    ? 'bg-blue-500 hover:bg-blue-700 text-white' 
    : 'bg-green-500 hover:bg-green-700 text-white';

    return (
        <form onSubmit={handleSubmit} className="flex justify-between items-center max-w-lg mx-auto my-4">
            <button onClick={toggleRole} className={`${roleButtonClasses} font-bold py-2 px-4 rounded mr-4`}>
            ↻ Role: {userRole} 
            </button>
            <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Type a message..."
                className="flex-grow mr-4 p-2 border rounded"
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={!content.trim()}>
                Send
            </button>
        </form>
    );
};

export default SendMessage;

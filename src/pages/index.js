import { useState } from 'react';
import MessageThread from '../components/MessageThread';
import SendMessage from '../components/SendMessage';
import MessageThreadModel from '../models/MessageThreadModel';

const Home = () => {
    const [thread, setThread] = useState(new MessageThreadModel());
    const [userRole, setUserRole] = useState(''); // 'patient' or 'doctor'


    const handleSend = (content) => {
      const newThread = new MessageThreadModel();
      newThread.messages = [...thread.messages];
      newThread.addMessage(userRole, content);
      setThread(newThread);
    };

    const selectRole = (role) => {
      setUserRole(role);
    };

    const toggleRole = () => {
      setUserRole(userRole === 'Patient' ? 'Doctor' : 'Patient');
    };

    if (!userRole) {
      return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
              <h2 className="text-2xl font-semibold mb-4">Select Your Role</h2>
              <div className="space-x-4">
                  <button 
                      onClick={() => selectRole('Patient')}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                      I am a Patient
                  </button>
                  <button 
                      onClick={() => selectRole('Doctor')}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                      I am a Doctor
                  </button>
              </div>
          </div>
      );
  }

    return (
      <div className="flex flex-col min-h-screen">
          <header className="bg-white w-full p-4 text-3xl font-bold fixed top-0 z-10 shadow-md">
              Patient-Doctor Chat
              
          </header>
          
          <div className="flex flex-col items-center justify-center pt-20 w-full">
                {thread.messages.length > 0 && <MessageThread messages={thread.messages} />}
                <SendMessage onSend={handleSend} userRole={userRole} toggleRole={toggleRole} />
          </div>
      </div>
    );
};

export default Home;

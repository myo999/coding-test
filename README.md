Patient-Doctor Chat Application

Overview
This application is a simple chat interface designed to simulate conversation between patients and doctors. It's built using Next.js and Tailwind CSS for styling. The app allows users to select a role (patient or doctor) and send messages within a chat thread. The messages are displayed with different alignments and background colors based on the sender's role.

Key Features
Role Selection: Users can choose to be either a patient or a doctor.
Message Sending: Users can type and send messages which appear in the chat thread.
Dynamic Message Alignment: Messages from patients and doctors are visually distinguished by different alignments and background colors.
Role Switching: Users can switch between patient and doctor roles using a toggle button.
Data Model
The data model consists of two main classes: Message and MessageThreadModel.

Message
Represents a single message in the chat.
Properties:
sender: The role of the message sender ('patient' or 'doctor').
content: The text content of the message.
timestamp: The date and time when the message was created.
MessageThreadModel
Manages the list of messages in the chat thread.
Properties:
messages: An array of Message instances.
Methods:
addMessage(sender, content): Creates a new Message instance and adds it to the messages array.
Design Choices
Next.js: Chosen for its simplicity and efficiency in creating React applications, with features like server-side rendering and file-based routing.
Tailwind CSS: Utilized for its utility-first approach, allowing for rapid UI development with a focus on responsiveness and customizability.
Flexbox for Layout: Flexbox is used extensively for its flexibility in creating responsive layouts, particularly for aligning messages in the chat.
State Management: React's useState and useEffect hooks are used for state management to handle message updates and role switching, providing a simple yet effective solution for state management without the need for more complex libraries like Redux.
No Database Integration: Messages are stored in a front-end data structure (array) and are not persistent, simplifying the architecture and focusing on front-end development.
Running the Application
Clone the repository.
Navigate to the project directory.
Run npm install to install dependencies.
Run npm run dev to start the development server.
Open http://localhost:3000 in your browser to view the application.
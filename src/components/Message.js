import { formatDistanceToNow } from 'date-fns';

const Message = ({ sender, content, timestamp }) => {

    // const isPatient = sender === 'Patient';
    // const messageAlignmentClass = isPatient ? 'text-left ml-auto bg-blue-100' : 'text-right mr-auto bg-green-100';

    // return (
    //     <div className="p-4 border-b border-gray-200 ${messageAlignmentClass}">
    //         <p className="font-bold">{sender}: <span className="font-normal">{content}</span></p>
    //         <small className="text-gray-500">
    //             {formatDistanceToNow(new Date(timestamp), { addSuffix: true })}
    //         </small>
    //     </div>
    // );

    const isPatient = sender === 'Patient';
    const alignmentClass = isPatient ? 'justify-end' : 'justify-start'; // Alignment based on sender
    const messageBackgroundClass = isPatient ? 'bg-blue-100' : 'bg-green-100';

    return (
        <div className={`flex w-full ${alignmentClass} my-2`}>
            <div className={`p-4 border rounded ${messageBackgroundClass}`}>
                <p><span className="font-bold">{sender}:</span> <span className="font-normal">{content}</span></p>
                <small className="text-gray-500 block mt-1">
                    {formatDistanceToNow(new Date(timestamp), { addSuffix: true })}
                </small>
            </div>
        </div>
    );
};

export default Message;

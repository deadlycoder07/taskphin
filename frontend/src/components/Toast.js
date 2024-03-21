
// Toast.js
const Toast = ({ message, show, onClose }) => {
    if (!show) return null;
  
    return (
      <div className="fixed bottom-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow flex items-center">
        {message}
        <button onClick={onClose} className="text-lg ml-4">&times;</button>
      </div>
    );
  };
  
export default Toast;
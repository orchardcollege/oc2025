import './App.css'
import Message from './Message'

function App() {
  const name = "";
  return (
    <>
      {name ? (
        <h1 className="p-4 rounded flex items-center justify-center bg-blue- text-white text-3xl font-bold mb-2">
          Hello {name}
        </h1>
      ) : (
        <Message />
      )}
      
    </>
  );
}

export default App

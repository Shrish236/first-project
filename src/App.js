import './App.css';
import Message from './components/Message';
import HelloFunction from './components/HelloFunction';
function App() {
  return (
    <div className="App">
      <h1>Class Component:</h1>
      <Message />
      <h1>Function Component:</h1>
      <HelloFunction />

    </div>
  );
}

export default App;

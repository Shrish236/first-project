import './App.css';
import Message from './components/Message';
import HelloFunction from './components/HelloFunction';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
function App() {
  return (
    <div className="App">
      {/* <h1>Class Component:</h1>
      <Message />
      <h1>Function Component:</h1>
      <HelloFunction /> */}
      <ErrorBoundary>
      <Hero Hero = "Flash" />
      <Hero Hero = "Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero Hero = "Fire" />
      </ErrorBoundary>
      

    </div>
  );
}

export default App;

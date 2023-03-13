// import logo from './logo.svg';
import { Firebase } from './firebase/Config';
import './App.css';

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          Firebase.firestore().collection('products').add({
            name:'MI',
            Price:2500
          })
        }}
      >click</button>
    </div>
  );
}

export default App;

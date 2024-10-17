import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Name from './Name';
import Greating from './Greeting';
import MyForm from './MyForm';

function App() {

  const handleClick = () =>{
    console.log("button was clicked!");
  };



  return (
    <div className="App">
      <header className="App-header">
          <MyForm /> 
          <Greating username = "user1" />
      </header>
    </div>
  );
}

export default App;

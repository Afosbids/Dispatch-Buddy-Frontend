import "./App.css";
import SignUpForm from './Components/SignUpFrontEnd.js';
import {useState} from "react";

const App = () => {

  const [name,setName] = useState("")

  console.log(name)

  console.log('re-rendered')

  return (
    <div className="App">
      <form>
        <SignUpForm placeholder="Enter first name" setName={setName}/>
        <SignUpForm placeholder="NGN 234"/>
        <SignUpForm placeholder="Enter email"/>
        <SignUpForm placeholder="Password"/>
        <SignUpForm placeholder="Confirm Password"/>
      </form>
    </div>
  );
}

export default App;

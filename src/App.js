//import logo from './logo.svg';
//import './App.css';
import Header from './components/header';
import Counter from './components/counter';
import Greeting from './components/greeting';
import { useState } from "react";
import Button from './components/button';
function App() {
  const[name,setName]=useState("Ionut");
  const colors=["blue","red","green","yellow","pink","purple"];
  const [selectedColor,setSelectedColor]=useState("red");
  function changeColor(color){
    setSelectedColor(color);
    document.body.style.backgroundColor=color;
  };
  return (
    <div className="App">
      <header className="App-header">
        
        <Header />
        <Counter/>
        <Greeting name="Relu"/>
        <Greeting name={name}/>
        <input value={name} onChange={(event)=>setName(event.target.value)}/>
        <Button>Click me</Button>
        {colors.map((color,index)=><button key={index} onClick={()=>changeColor(color)}>{color}</button>)}
      </header>
    </div>
  );
}

export default App;

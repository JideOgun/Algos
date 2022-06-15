import "./App.css";
import {useState} from 'react';

function App() {
 const [list, setList] = useState([]);
 const [value, setValue] = useState("")

 const changeHandler = (e) => {
   setValue(e.target.value)
 }

const submitHandler = () => {
  setList([...list, value]);
  setValue("");
}

const deleteHandler = (item) => {
  setList(list.filter((el) => el !== item))
}

  return <div className="App">
  stuff
  
  <div>
    <input type="text" onChange={changeHandler} value={value}  ></input>
    <button onClick={submitHandler}>Add</button>
    
  </div>
  {list.map((el, i) => {
    return <li key={i} onClick={() => deleteHandler(el)}  >{el} </li>
  })}
  </div>;
}

export default App;

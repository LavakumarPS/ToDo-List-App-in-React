import React, {useState} from "react";

const App = () => {
 

    const [todos,setTodos] = useState([]);
    const [input, setInput] = useState('');

  const handleOnChange = (e) => {
     setInput([e.target.value])                        
  }
  
  const handleSubmit = (e) => {
     e.preventDefault();
     setTodos([...todos, input]);
     setInput('');

  }
  
  const handleDelete =(index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  }
  
return(
  <div className="">
    <h1 >TODO List</h1>
    <form onSubmit={handleSubmit}>
     <input className="" onChange={handleOnChange} type="text" value={input} required></input>
     <button type="submit" className="">ADD</button>
     </form>
     <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}
          <button onClick={()=>handleDelete(index)} className="">Delete</button>
          </li>
        ))}
      </ul> 
  </div>
);
}

export default App;

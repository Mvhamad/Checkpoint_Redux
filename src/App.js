import { React } from "react";
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";
import './App.css';

function App() {
  
  return (
    <>
      <div className="all">
        <div className="App">
          <header>
            <h1>ToDo App</h1>
          </header>
          <ListTask />
          <AddTask />
        </div>
      </div>
    </>

  );
}

export default App;

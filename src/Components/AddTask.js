import "../styles/addtask.css";
import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/Configredux";

export default function AddTask() {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(description));
    setDescription("");
  };

  return (
    <>
      <div className="container">
        <div>
          <p>Fill in this box for adding a new task</p>
          <form onSubmit={handleSubmit}>
            <input type="description" placeholder="Add a Task" value={description}
              onChange={(e) => setDescription(e.target.value)} />
          </form>
        </div>
      </div>

    </>
  );
};

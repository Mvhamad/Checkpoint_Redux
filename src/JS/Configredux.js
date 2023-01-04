import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: "ToDo",
    initialState: [
        {
            id: 1,
            description: "Prendre un bain",
            isDone: false
        },
        {
            id: 2,
            description: "Prendre le Petit Dejeuner",
            isDone: false
        },
        {
            id: 3,
            description: "Se brosser les dents",
            isDone: false
        },
        {
            id: 4,
            description: "Acheter du Parfum chez Nùùl Parfum",
            isDone: false
        }
    ],
    
    reducers : {
        // function for adding a new task in my state
        addTask : (state, action) => {
             // type : ToDo/addTask est le type de l'action
            const newTask = {
                id : Date.now() ,
                description : action.payload,
                isDone : false,
            }
            state.push(newTask)
        },

        // function for delete a task in my list of tasks in my state
        deleteTask : (state, action) => {
            // type : ToDo/deleleTask  est le type de l'action
            state = state.filter((t) => t.id !== action.payload)
            return state
        },

        // function that change the status of a task
        toggleTask : (state, action ) => {
            // type : ToDo/toggleTask est le type de l'action
            const task = state.find((t)  => t.id === action.payload);
            task.isDone = !task.isDone;
        },
    }
});

export const {addTask, deleteTask, toggleTask} = todoSlice.actions


import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='main-div'> 
       <h1>A Todo App By - Learn With Vivek</h1>
      <div className='todo-app'>   
   <TodoList />
 </div></div>
   
  );
}

export default App;

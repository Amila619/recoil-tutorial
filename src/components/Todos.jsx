import { useState } from "react"
import { useRecoilState } from "recoil"
import { todoState } from "../state/atoms/TodoState"
import Todo from "./Todo"



export default function Todos() {
    
  const [todos, setTodos] = useRecoilState(todoState)
  const [inputText, setInputText] = useState('')

  function addTodo() {
    if (inputText.trim() === "") return;
    setTodos((prevTodos) => [...prevTodos, {id: Math.random() , text: inputText}])
    setInputText('')
  }

  function clearTodos() {
    setTodos([])
  }

  function handleInputChange(e) {
    setInputText(e.target.value) 
  }

  const TodoList = todos.map((todo) => <Todo key={todo.id} id={todo.id} text={todo.text} />)

    return (
        <main>
            <input type="text" value={inputText} onChange={handleInputChange} name="todoInput" id="todoInput" />
            <button onClick={addTodo}>Add Todo</button>
            <button onClick={clearTodos}>Clear Todos</button>
            {TodoList}
        </main>
    )
}
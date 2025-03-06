import { useRecoilValue } from "recoil"
import Todos from "./components/Todos"
import { totalTodos } from "./state/selectors/TotalTodos"

function App() {

  const totalTodosState = useRecoilValue(totalTodos)

  return (
      <div>
        <h1>Todo List {totalTodosState}</h1>
        <Todos /> 
      </div>
  )
}

export default App

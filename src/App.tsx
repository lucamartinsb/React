import './App.css'
import AddTask from './components/AddTasks'
import Tasks from './components/Tasks'

function App() {
  return (
      <div>
        <h1 className='title'>Gerenciador de Tarefas</h1>
        <Tasks/>
        <AddTask/>
      </div>
  )
}

export default App

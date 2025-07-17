import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTasks";

function App() {
  /*Adicionando Hook. Serve para guardar estados/efeitos da aplicação para usar ou reutilizar em componentes.
  Elimita a necessidade de utilizar classes, facilita a organização e manutençao de forma mais simples.*/
  const [tasks, setTask] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Estudar programaçãop para se tornar um dev full-stack",
      isCompleted: false
    },
    {
      id: 2,
      title: "Estudar Inglês",
      description: "Estudar ingles para trabalhar pro exterior",
      isCompleted: false
    },
    {
      id: 3,
      title: "Fazer academia",
      description: "Fazer academia pra ficar forte e saudável",
      isCompleted: false
    }
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
      <Tasks tasks={tasks}/> {/* A prop (tasks) será o state {tasks}.
      Tudo que eu passar dentro da tag do componente, eu terei acesso lá no componente.tsx*/}
      </div>
    </div>  
  );
}

export default App;

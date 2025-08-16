import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTasks";

function App() {
  /*
    Adicionando um Hook: 
    Serve para guardar estados/efeitos da aplicação para usar ou reutilizar em componentes.
    Elimina a necessidade de utilizar classes, facilita a organização e manutençao de forma mais simples.
  */
  const [tasks, setTask] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Estudar programaçãop para se tornar um dev full-stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Inglês",
      description: "Estudar ingles para trabalhar pro exterior",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Fazer academia",
      description: "Fazer academia pra ficar forte e saudável",
      isCompleted: false,
    },
  ]);

  /*  Criando uma função para atualizar o estado do isCompleted de tasks
      Essa função recebe como parâmetro o id da tarefa clicada, cria uma constante que recebe o mapeamento atual de tasks (hook) e
      verfica se a id do parâmetro é igual à algum id da task mapeada, se sim, retorna um novo array da task com o valor de isCompleted, 
      correspondente ao id em questão, invertido. Caso não, retorna o mapeamento de tasks alterações.
      Por fim, invoca a função setTask (hook), que atualiza o estado de tasks, com os valores da constante. 
  */
  function onTaskClick(taskID) {
  const newTasks = tasks.map((task) => {
    if (task.id === taskID) {
      return { ...task, isCompleted: !task.isCompleted };
    }
    return task;
    
  });
  // Atualiza o state.
  setTask(newTasks);
}

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick}/>
        {
          // A prop (tasks) será o state {tasks}
          // Tudo que eu passar dentro da tag do componente, eu terei acesso lá no componente.tsx, nesse caso, em Tasks.tsx
          // tasks={} poderá ser acessado lá em Tasks.tsx como métodos. Exemplo: props.tasks[0].title
        }
      </div>
    </div>
  );
}

export default App;

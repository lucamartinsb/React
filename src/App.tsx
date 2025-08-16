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

  /*  Esta função é responsável por alternar o status isCompleted de uma tarefa quando ela é clicada. 
      Ela recebe um taskID como argumento.
      Usa o método map para iterar sobre o array tasks.
      Para cada tarefa, ela verifica se seu id corresponde ao taskID passado para a função.
      Se houver uma correspondência, ela retorna um novo objeto de tarefa usando o spread operator (...task), 
      que copia todas as propriedades existentes e, em seguida, substitui a propriedade isCompleted por seu valor oposto (!task.isCompleted). 
      Este é um padrão comum no React para atualizar o estado de forma imutável.
      Se não houver correspondência, ela retorna a tarefa como está.
      Por fim, ela chama setTask(newTasks) para atualizar o estado com o novo array.
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
        {/* 
            A forma como o React passa dados e funções de um componente pai (o componente App) para um componente filho (o componente Tasks) é chamado de 
            props (abreviação de "properties" ou propriedades). 
            O nome à esquerda do sinal de igualdade (tasks) é o nome da prop defininda no componente filho, é assim que a acessamos dentro do componente Tasks.
            O valor à direita ({tasks}) é a variável tasks que foi declarada e é gerenciada pelo useState no componente App.
            O que isso faz é passar a lista de tarefas completa do estado do App para o componente Tasks. 
            O componente Tasks pode então usar essa lista para renderizar cada tarefa na tela.
            O nome à esquerda (onTaskClick) é o nome da prop.
            O valor à direita ({onTaskClick}) é a função definida no App para lidar com o clique em uma tarefa.
            Ao passar a função dessa forma, estará dando ao componente Tasks a capacidade de executar essa função quando uma tarefa for clicada. 
            A lógica de atualização do estado da tarefa permanece no componente pai (App), que é onde o estado é gerenciado, mas o componente filho (Tasks) tem o "comando" para disparar essa ação.
            Essa abordagem é um conceito fundamental no React chamado "fluxo de dados unidirecional". 
            Os dados fluem de cima para baixo, do componente pai para os componentes filhos através das props.
        */}
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}

export default App;

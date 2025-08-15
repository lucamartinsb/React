import { ChevronRightIcon } from "lucide-react";

function Tasks(props) {
  /*
    Props (properties) são um mecanismo fundamental para passar dados de um componente pai para um componente filho.
    São como parametros de uma função, mas para componentes React.
    Props servem para: 
    - Passar dados de um pai para um filho. - Reusabilidade de componentes. - Comunicação unidirecional. - Personalização de componentes. - Renderização condicional. 
    Por convenção usamos a palavra props como parâmetro n função elemento filho, mas pode-se usar qualquer outro nome a depender do contexto.
    */
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        /*  A key é essencial para que o React possa identificar de forma única cada item da lista.
            Isso permite que o React otimize a renderização, saiba quais itens foram adicionados, removidos ou reordenados, e mantenha o estado correto de cada componente da lista.
            Neste caso, a key que usaremos será o id de cada objeto do state. */
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            /* 
            Para atualizar o estado de um componente pai a partir de um componente filho, precisa-se criar e passar uma função de callback como uma prop para o componente filho.
            E essa prop sendo uma função que precisa de um argumento (task.id) e de invocá-la em um evento JS, como o onClick(), é necessário usar uma arrow function.
            Através do template string podemos usar javascript e adicionar tailwind também dentro do className.
            O evento onClick irá invocar a função onTaskClick() através da props e essa função irá atualizar o estado de Tasks, inverter o valor de isCompleted caso id seja igual ao
            id da tarefa clicada e se task.isCompleted for true, adiciona o estilo line-through no texto do botão correspondente. */
            className={`bg-slate-400 text-white p-2 rounded-md w-full text-left ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

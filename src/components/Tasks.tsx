function Tasks(props) {
  /*
    Props (properties) são um mecanismo fundamental para passar dados de um componente pai para um componente filho.
    São como parametros de uma função, mas para componentes React.
    Props servem para: 
    - Passar dados de um pai para um filho. - Reusabilidade de componentes. - Comunicação unidirecional. - Personalização de componentes. - Renderização condicional. */
  return (
    <ul className="space-y-4">
      {props.tasks.map((task) => (
        <li className="bg-slate-400 text-white p-2 rounded-md">{task.title}</li>
      ))}
    </ul>
  );
}

export default Tasks;

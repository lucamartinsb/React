function Tasks(props) {
  /*
    Props (properties) são um mecanismo fundamental para passar dados de um componente pai para um componente filho.
    São como parametros de uma função, mas para componentes React.
    Props servem para: 
    - Passar dados de um pai para um filho. - Reusabilidade de componentes. - Comunicação unidirecional. - Personalização de componentes. - Renderização condicional. */
  return <h1>{props.tasks[0].title}</h1>;
}

export default Tasks;

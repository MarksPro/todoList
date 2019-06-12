class TodoView {
  constructor(){
    this.todoApp = document.querySelector('#listagem');
  };
  template(model){
    
    return `
      <ul id="taskList">
        ${model.map((item, index) => {
          console.log(item.description);
          return `
        <li>${item.description}<button id="removeTask" onclick='todoApp.deleteTask(${index});'>Deletar</button> <button id="editTask" onclick='todoApp.editTask(${index})'>Editar</button></li>
          `
        }).join('')}
      </ul>
    `
  };

  updateScreen(model){
    this.todoApp.innerHTML = this.template(model);
  };
};
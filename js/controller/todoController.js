class TodoController {
  constructor(){
    this.taskList = [];
    this.inputTask = document.querySelector('#descriptionTask');
    this.view = new TodoView();
    this.view.updateScreen(this.taskList);
  };

  addTask(){
    if(this.inputTask.value.length === 0){
      alert('Digite uma tarefa')
    }
    else {
      this.taskList.push(this.createModel(this.inputTask.value))
      this.view.updateScreen(this.taskList);
      this.inputTask.value = '';
    }
  };

  deleteTask(index){ 
    this.taskList.splice(index, 1);
    this.view.updateScreen(this.taskList);
  };
  
  editTask(index){
    if(this.inputTask.value.length === 0){
      alert('Digite a tarefa para editar');
    }
    else {
      this.taskList[index] = this.createModel(this.inputTask.value);
      this.view.updateScreen(this.taskList);
      this.inputTask.value = '';
    }
 
  };

  createModel(data){
    return new TodoModel(
      this.taskList.length,
      this.inputTask.value,
      new Date
    );
  };
};
class TodoModel {
  constructor(id, description, date){
    this._id = id;
    this._descriptionTask = description;
    this._currentDate = date;
  };

  get id(){
    return this._id;
  };

  get description(){
    return this._descriptionTask;
  };

  get currentDate(){
    return `${this._currentDate.toLocaleString('pt-br', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
  };
};
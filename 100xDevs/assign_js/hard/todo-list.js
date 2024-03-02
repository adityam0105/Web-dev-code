class Todo {
  constructor(){
    this.todos =[];
  }
  add(todo){
    this.todos.push(todo);
  }
  remove(indexOfTodo){
    if(indexOfTodo>=0 && indexOfTodo<this.todos.length){
      this.todos.splice(indexOfTodo, 1);
    }
    else{
      console.error("Index out of bounds");
    }
  }
  update(index, updatedTodo){
    if(index>=0 && index <this.todos.length){
      this.todos[index] = updatedTodo;
    }
    else{
      console.error("Index out of bounds")
    }
  }
  getAll(){
    return this.todos;
  }
  get(indexOfTodo){
    if(indexofTodo>=0 && indexofTodo<this.todo.length){
      return this.todos[indexOfTodo];
    }
    return null;
  }
  clear(){
    this.todos=[];
  }
}

module.exports = Todo;

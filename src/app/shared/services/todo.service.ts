import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

   private todos: Todo[] = [];

   constructor() { }
 
   getTodos(): Todo[] {
     return this.todos.filter(todo =>
     !todo.completed)
   }
 
    createTodo(todo: Todo) {
      todo.id = Date.now();
      todo.checked = false;
      this.todos.push(todo);
    }
 
     completeTodo(todo: Todo) {
       const selectedTodo: Todo = {
       ...todo,
       completed: new Date()
       };
       const index = this.todos.findIndex(i => i ===
       todo);
       this.todos[index] = selectedTodo;
       }
 

      updateTodo(id: number, todo: Todo) {  
        const index = this.todos.findIndex(item => item.id == id)
        this.todos[index].todo = todo.todo
      }

      deleteTodo(id: number) {
        this.todos = this.todos.filter(d => d.id != id);
        return this.todos;
      }


      checkedTodoId(id: number) {
        const index = this.todos.findIndex(item => item.id == id)
        this.todos[index].checked = !this.todos[index].checked
      }

}

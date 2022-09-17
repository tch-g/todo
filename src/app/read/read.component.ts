import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/model/todo';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  
    todos: Todo[]= []
    showCreate = false;
    showUpdate: Todo | null = null;
    deleteTodo: Todo | null = null;


  constructor(private todoService: TodoService) {}

    ngOnInit(): void {
      this.getTodos()
    }

    getTodos(){
      this.todos =  this.todoService.getTodos()
      console.log(this.todos)
    }


    closeCreate(){
      this.showCreate = false;
      this.getTodos()
    }

    closeUpdate(){
      this.showUpdate = null
      this.getTodos()
    }

    onConfirm(confirmed: boolean) {
      if (confirmed && this.deleteTodo) {
        this.todoService.completeTodo(this.
        deleteTodo);
        this.getTodos();
      };

      this.deleteTodo = null;
    }


    checkedTodo(id: any) {
      this.todoService.checkedTodoId(id) 
    }
  

}
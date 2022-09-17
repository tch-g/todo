import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../shared/model/todo';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @Output() createFormClose = new EventEmitter();
  form!: FormGroup
  todo: Todo[]= []

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      todo: new FormControl('', [Validators.required])
    })

  }



  addTodo(){
    this.todoService.createTodo(this.form?.value)
    this.createFormClose.emit()
  }

}

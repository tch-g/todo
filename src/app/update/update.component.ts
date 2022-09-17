import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../shared/model/todo';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  @Input() todo: Todo | undefined;
  @Output() updateFormClose = new EventEmitter();
  form!: FormGroup
  
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {

    this.form = new FormGroup({
      todo: new FormControl(this.todo?.todo, [Validators.required])
    })

  }

  
  updateTodo() {
    if (this.todo) {
      this.todoService.updateTodo(this.todo.id, this.form.value);
      this.updateFormClose.emit();
    }
  }

}
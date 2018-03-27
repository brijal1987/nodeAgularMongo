import { Component, OnInit, Output } from '@angular/core';

import { TodoService } from '../../../shared/services/todo.service';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  model: any = {};

  constructor( 
    private todoService: TodoService,
    private alertService: AlertService 
  ) { }

  ngOnInit() {
  }

  addTodo(form) {
    if(this.todoService.addTask(this.model.task)) {
      this.model.task = '';
      this.alertService.setMessage('Task Added!')
      form.reset();      
    }

  }
}

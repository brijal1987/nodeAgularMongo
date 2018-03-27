import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TodoService } from '../../../../shared/services/todo.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input('data') task;
  @Output() completed = new EventEmitter();
  
  constructor( private todoService: TodoService) { }

  ngOnInit() {
  }  

  remove(id) {
    let confirmed = confirm('Are you sure?');

    if(confirmed) {
      this.todoService.removeTask(id).subscribe(() => {
        
      })
    }    
  }

  complete(id) {
    this.todoService.completeTask(id).subscribe(() => {
      this.completed.emit(id);
    });
  }

  resetTask(id) {
    this.todoService.completeTask(id).subscribe(() => {
      this.completed.emit(id);
    });
  }

}

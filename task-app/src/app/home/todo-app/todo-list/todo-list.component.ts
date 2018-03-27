import { Component, OnInit, Input } from '@angular/core';

import { TodoService } from '../../../shared/services/todo.service';
import { Task } from '../../../shared/models/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks: Task[] = [];
  query: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getAllTasks().subscribe((data: Task[]) => {
      this.tasks = data;
    })
  }

  resetTask(id) {
    this.todoService.getAllTasks().subscribe((data: Task[]) => {
      this.tasks = data;
    })
  }

  completeTask(id) {
    
    this.todoService.getAllTasks().subscribe((data: Task[]) => {
      this.tasks = data;
    })

    // this.tasks.forEach((el,i) => {
    //   if(el.id === id) {
    //     console.log(id);
    //     this.tasks[i].completed = true;
    //   }
    // })

    // console.log(this.tasks);
  }

}

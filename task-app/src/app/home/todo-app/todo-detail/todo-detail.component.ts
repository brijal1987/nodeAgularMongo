import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoService } from '../../../shared/services/todo.service';
import { Task } from '../../../shared/models/task';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  task:Task;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) { }

  ngOnInit() {    
    const id = this.route.snapshot.paramMap.get('id');

    this.todoService.getTaskById(id).subscribe(data => {
      this.task = data;      
    })
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../models/task';
import { initialTasks } from '../temp-data';
import { appConfig } from '../../app.config';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TodoService {

  tasks: Task[] = [];

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(appConfig.apiUrl + '/tasks');
  }

  getTaskById(id): Observable<Task> {
    return this.http.get<Task>(appConfig.apiUrl + '/tasks/' + id);
  }

  addTask(task): boolean {
    // const taskObject: Task = {
    //   _id: this.tasks.length+1,
    //   title: task,
    //   completed: false,
    //   date: new Date()
    // }

    // this.tasks.push(taskObject);

    return true;
  }

  removeTask(id): Observable<any> {
    return this.http.delete(appConfig.apiUrl + '/tasks/' + id);
  }

  completeTask(id): Observable<any> {
    return this.http.put(appConfig.apiUrl + '/tasks/' + id, {
      completed: true
    });
  }
}

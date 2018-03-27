import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {

  msg: string = '';

  constructor() { }

  setMessage(msg) {
    this.msg = msg;
  }

  getMessage() {
    return this.msg;
  }
}

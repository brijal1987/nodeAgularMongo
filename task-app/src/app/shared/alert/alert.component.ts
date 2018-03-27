import { Component, OnInit } from '@angular/core';

import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  msg: string;

  constructor( private alertService: AlertService) { }

  ngOnInit() {
    this.msg = this.alertService.getMessage();
  }

}

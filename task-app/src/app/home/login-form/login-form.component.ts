import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  model: any = {};
  errorMsg: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(data => {
      localStorage.setItem('user', JSON.stringify(data));
      this.router.navigate(['/todo']);
    }, error => {
      console.log(error);
      this.errorMsg = error.error.msg
    })
  }
}

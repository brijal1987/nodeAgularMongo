import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm: FormGroup;

  constructor( private builder: FormBuilder ) { }

  ngOnInit() {
    this.registrationForm = this.builder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      confPassword: ['', Validators.required]
    })
  }

  register() {
    console.log(this.registrationForm.get('name'));
    console.log(this.registrationForm.value);
  }

}

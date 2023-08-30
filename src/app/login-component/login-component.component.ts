import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  title = 'Login';
  validationForm!: FormGroup;
  submitted = false;

  constructor(private titleService: Title) {
    this.validationForm = new FormGroup({
      email: new FormControl('admin@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('adminroot', [Validators.required, Validators.minLength(5)])
    });
  }

  submit() {
    this.submitted=true;
    console.log(this.validationForm.get('email')?.value);
  }

  // get email(): AbstractControl {
  //   return this.validationForm.get('email')!;
  // }

  // get lastName(): AbstractControl {
  //   return this.validationForm.get('password')!;
  // }
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}


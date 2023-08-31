import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent {
  title = 'Register';
  sigupForm!: FormGroup;
  submitted = false;

  constructor(private titleService: Title) {
    this.sigupForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      phno: new FormControl("+91-", [ Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.minLength(10), Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });
  }

  submit() {
    this.submitted=true;
    console.log(this.sigupForm.get('email')?.value);
  }

ngOnInit() {
  this.titleService.setTitle(this.title);
}
}

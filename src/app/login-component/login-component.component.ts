import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
title = 'Login';

constructor(private titleService: Title){}

ngOnInit() {
  this.titleService.setTitle(this.title);
}
}

import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent {
  title = 'Register';

constructor(private titleService: Title){}

ngOnInit() {
  this.titleService.setTitle(this.title);
}
}

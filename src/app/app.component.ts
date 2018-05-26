import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = [
    { path: "/main", label: "Main", active: "button-active"},
    { path: "/chat", label: "Chat", active: "button-active"}
  ];
}
 
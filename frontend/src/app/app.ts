import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./component/login/login";
import { Signup } from "./component/signup/signup";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Signup],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'frontend';
}

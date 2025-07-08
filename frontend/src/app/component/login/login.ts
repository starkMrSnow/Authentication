import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  username: string | null = null;
  password: string | null = null;

  ngOnInit(){
    console.log("login page loaded successfully")
  }
  enterDetails(){
    if(this.username != null && this.password != null){
      console.log("Details are just about correct minus validation")
    }
    return{
      username: this.username,
      paasord: this.password
    }
  }

}

import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {

  username : string | null= null;
  email:  string | null = null
  password: string | null = null

  ngOnInit(): void{
    console.log("sign-up component initialised")
  }
  captureDetails(){
    if(this.username != null && this.email != null && this.password != null){
      console.log("details are all input correctly");

    }
    return{
      username: this.username,
      email: this.email,
      password: this.password 
    }
  }
}
